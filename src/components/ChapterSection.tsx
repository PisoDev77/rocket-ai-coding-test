'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import DecorativeBand from './DecorativeBand';

/**
 * ## 장 소개 섹션 컴포넌트
 *
 * 이 컴포넌트는 **"제 1장" 텍스트와 장식용 띠**를 표시하고 **"나의 사주팔자" 제목**을 순차적으로 보여줍니다.
 *
 * ### 주요 기능
 * - 전체 화면 높이로 표시
 * - 순차적 애니메이션 (제목 → 띠 → 부제목)
 * - 블러 배경 효과
 *
 * @returns {JSX.Element} 장 소개 **섹션 컴포넌트**
 */
const ChapterSection = () => {
	const titleAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 0.2,
		duration: 0.8,
		y: 50,
		opacity: 0,
		triggerOnce: true,
	});

	const bandAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 0.6,
		duration: 0.6,
		y: 30,
		opacity: 0,
		triggerOnce: true,
	});

	const subtitleAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 1.0,
		duration: 0.8,
		y: 50,
		opacity: 0,
		triggerOnce: true,
	});

	const characterAnimation = useScrollAnimation({
		threshold: 0.2,
		delay: 1.4,
		duration: 1.0,
		y: 80,
		opacity: 0,
		triggerOnce: true,
	});

	return (
		<section className='w-full flex flex-col items-center bg-gray-50 px-4' style={{ minHeight: 'max(100vh, 600px)' }}>
			<div
				className='w-full max-w-md mx-auto flex flex-col relative'
				style={{
					minHeight: 'max(100vh, 600px)',
					backgroundImage: 'url(/images/chapter-bg.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundColor: '#F5F3EC',
				}}>
				{/* 배경 오버레이 효과 */}
				<div className='absolute inset-0 bg-black/20' />

				{/* 상단 텍스트 영역 */}
				<div className='relative z-10 text-center space-y-12 top-20 flex flex-col gap-4'>
					{/* 제 1장 */}
					<div className='flex items-center justify-center'>
						<motion.h1
							ref={titleAnimation.ref}
							initial={titleAnimation.initial}
							animate={titleAnimation.animate}
							className='text-xl md:text-2xl font-medium text-white tracking-wider drop-shadow-lg'>
							제 1장
						</motion.h1>
					</div>

					{/* 장식용 띠 */}
					<div className='flex items-center justify-center'>
						<motion.div ref={bandAnimation.ref} initial={bandAnimation.initial} animate={bandAnimation.animate}>
							<DecorativeBand />
						</motion.div>
					</div>

					{/* 나의 사주팔자 */}
					<div className='flex items-center justify-center'>
						<motion.h2
							ref={subtitleAnimation.ref}
							initial={subtitleAnimation.initial}
							animate={subtitleAnimation.animate}
							className='text-2xl md:text-3xl font-bold text-white tracking-wider drop-shadow-lg'>
							나의 사주팔자
						</motion.h2>
					</div>
				</div>

				{/* 하단 캐릭터 이미지 */}
				<div className='relative z-10 flex-1 flex items-end justify-center pb-8'>
					<motion.div ref={characterAnimation.ref} initial={characterAnimation.initial} animate={characterAnimation.animate} className='w-full h-auto'>
						<img src='/images/character.png' alt='캐릭터' className='w-full h-auto object-contain' />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ChapterSection;
