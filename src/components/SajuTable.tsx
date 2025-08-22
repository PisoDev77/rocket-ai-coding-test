'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { observer } from 'mobx-react-lite';
import sajuStore from '@/stores/sajuStore';
import PillarElement from './PillarElement';

/**
 * ## 사주팔자 표 컴포넌트
 *
 * 이 컴포넌트는 **전통적인 사주팔자 표**를 구현하고 **MobX 상태관리**를 통해 사주 정보를 표시합니다.
 *
 * ### 주요 기능
 * - MobX store에서 데이터 연동
 * - 생년월일시 정보 표시
 * - 천간지지 4주 표시 (오행별 컬러 구분)
 * - 십성, 십이운성, 십이신살 표시
 * - 개인 운세 정보 포함
 * - 스크롤 기반 애니메이션
 *
 * @returns {JSX.Element} 사주팔자 **표 컴포넌트**
 */
const SajuTable = observer(() => {
	const tableAnimation = useScrollAnimation({
		threshold: 0.2,
		delay: 0.3,
		duration: 1.0,
		y: 50,
		opacity: 0,
		triggerOnce: true,
	});

	const data = sajuStore.getDisplayData();

	// 테이블 헤더 구성 - 5컬럼 (첫 번째는 행 제목용)
	const columnCount = data.headers.length;
	const gridClass = `grid-cols-${columnCount}`;

	return (
		<motion.div ref={tableAnimation.ref} initial={tableAnimation.initial} animate={tableAnimation.animate} className='w-full px-2 relative'>
			{/* 외부 박스 - 두꺼운 검은 테두리 */}
			<div className='relative' style={{ padding: '8px', margin: '8px' }}>
				{/* 내부 장식 박스 - 얇은 남색 테두리 */}
				<div
					className='border-2 border-blue-800 absolute z-10'
					style={{
						inset: '0px 8px',
						borderColor: '#2B557E',
						pointerEvents: 'none',
					}}></div>
				<div
					className='border-2 border-blue-800 absolute'
					style={{
						inset: '8px 0px',
						borderColor: '#2B557E',
						pointerEvents: 'none',
					}}></div>
				<div
					className='border-4 border-black absolute z-20'
					style={{
						inset: '0px 0px',
						pointerEvents: 'none',
					}}></div>

				{/* 실제 테이블 컨텐츠 */}
				<div className='relative'>
					{/* 제목 및 생년월일 */}
					<div className='text-center py-4' style={{ paddingTop: '45px', paddingBottom: '26px' }}>
						<div className='flex justify-between items-center mb-2'>
							<div className='w-14 h-auto flex items-center justify-center'>
								<img src='/images/left-decoration.svg' alt='왼쪽 장식' className='w-full h-full object-contain' />
							</div>
							<h3 className='font-bold text-gray-800' style={{ fontSize: 'min(4.5vw, 18px)' }}>
								{data.birthInfo.title}
							</h3>
							<div className='w-10 h-auto flex items-center justify-center relative -mt-2'>
								<img src='/images/right-decoration.svg' alt='오른쪽 장식' className='w-full h-full object-contain' />
							</div>
						</div>
						<p className='font-medium text-gray-800 mb-1' style={{ fontSize: 'min(4vw, 16px)' }}>
							{data.birthInfo.date} {data.birthInfo.time}
						</p>
					</div>

					<div style={{ padding: '0 13px', paddingBottom: '25px' }}>
						{/* 헤더 행 */}
						<div className={`grid grid-cols-5 border-b-2 border-gray-800`} style={{ inset: '0 6px' }}>
							<div className='border-r-2 py-2 text-center text-sm font-bold flex items-center justify-center'></div>
							{data.headers.map((header, index) => (
								<div
									key={header}
									className={`border-r-2 border-gray-800 py-2 text-center font-bold flex items-center justify-center`}
									style={{ fontSize: 'min(4vw, 16px)' }}>
									{header}
								</div>
							))}
						</div>

						{/* 테이블 데이터 행들 */}
						{data.tableData.map((row, rowIndex) => (
							<div key={rowIndex} className={`grid grid-cols-5 border-b border-gray-800`}>
								{/* 행 라벨 */}
								<div
									className={`border-r-2 ${rowIndex === 1 ? '' : 'border-b-2'} border-gray-800 py-2 px-1 text-center flex items-center justify-center`}
									style={{ fontSize: 'min(3.5vw, 14px)' }}>
									{data.rowLabels[rowIndex].text}
									<br />({data.rowLabels[rowIndex].subText})
								</div>

								{/* 행 데이터 */}
								{row.map((cell, cellIndex) => (
									<div
										key={cellIndex}
										className={`${rowIndex === 1 ? '' : 'border-b-2'} border-r-1 border-gray-800 text-center flex items-center justify-center min-h-16`}
										style={{ fontSize: 'min(3.5vw, 14px)' }}>
										{/* 천간/지지 행인 경우 PillarElement 사용 */}
										{rowIndex === 1 || rowIndex === 2 ? (
											<PillarElement text={cell.text} subText={cell.subText} detail={cell.detail || ''} colorClass={cell.colorClass || ''} />
										) : (
											<div>
												{cell.multiItems ? (
													cell.multiItems.map((item, idx) => (
														<div key={idx} className='mb-1'>
															<div className='font-medium' style={{ fontSize: 'min(3.5vw, 14px)' }}>
																{item.text}
															</div>
															<div className='text-gray-600' style={{ fontSize: 'min(3vw, 12px)' }}>
																({item.subText})
															</div>
														</div>
													))
												) : (
													<>
														<div className='font-medium' style={{ fontSize: 'min(3.5vw, 14px)' }}>
															{cell.text}
														</div>
														{cell.subText && (
															<div className='text-gray-600' style={{ fontSize: 'min(3vw, 12px)' }}>
																({cell.subText})
															</div>
														)}
													</>
												)}
											</div>
										)}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
});

export default SajuTable;
