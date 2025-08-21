'use client';

import sajuStore from '@/stores/sajuStore';

interface PillarElementProps {
	text: string;
	subText: string;
	detail: string;
	colorClass: string;
}

/**
 * ## 사주 기둥 요소 컴포넌트
 *
 * 이 컴포넌트는 **천간/지지 요소**를 표시하고 **오행별 색상**을 적용합니다.
 *
 * ### 주요 기능
 * - 천간/지지 한자 표시
 * - 오행별 배경 색상 적용
 * - 음양 정보 포함 가능
 *
 * @param {string} char - **한자 문자**
 * @param {string} element - **오행 (목/화/토/금/수)**
 * @param {'heaven'|'earth'} type - **천간/지지 구분**
 * @returns {JSX.Element} 사주 기둥 요소 **컴포넌트**
 */
const PillarElement = ({ text, subText, detail, colorClass }: PillarElementProps) => {
	// colorClass가 제공되지 않은 경우 기본값
	const defaultStyle = {
		backgroundColor: '#6b7280', // gray-500
	};

	const dynamicStyle = {
		'type-1': { backgroundColor: '#2F2F2F' },
		'type-2': { backgroundColor: '#C23030' },
		'type-3': { backgroundColor: '#18868C' },
		'type-4': { backgroundColor: '#F9F9F9', border: 'solid 2px black', color: 'black' },
	}[colorClass];

	return (
		<div className='w-16 h-16 mx-auto rounded-2xl text-white flex flex-col items-center justify-center font-bold p-2' style={dynamicStyle}>
			<div className='text-xs'>{detail}</div>
			<div className='text-lg'>{text}</div>
			<div className='text-2xs leading-tight'>{subText}</div>
		</div>
	);
};

export default PillarElement;
