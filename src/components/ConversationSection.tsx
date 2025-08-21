'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ChatBubbleSVG from './ChatBubbleSVG';
import SecondChatBubbleSVG from './SecondChatBubbleSVG';

/**
 * ## 대화 섹션 컴포넌트
 *
 * 이 컴포넌트는 **말풍선 2개와 캐릭터 이미지**를 표시하고 **"슥슥" 텍스트 애니메이션**을 포함합니다.
 *
 * ### 주요 기능
 * - 순차적 말풍선 애니메이션
 * - 캐릭터 이미지 표시
 * - 슥슥 텍스트 애니메이션 효과
 * - 스크롤 기반 트리거
 *
 * @returns {JSX.Element} 대화 **섹션 컴포넌트**
 */
const ConversationSection = () => {
	const firstBubbleAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 0.3,
		duration: 0.6,
		y: 30,
		opacity: 0,
		triggerOnce: true,
	});

	const handAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 0.6,
		duration: 0.8,
		y: 30,
		opacity: 0,
		triggerOnce: true,
	});

	const writingTextAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 0.9,
		duration: 0.8,
		x: 30,
		y: 0,
		opacity: 0,
		triggerOnce: true,
	});

	const secondBubbleAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 1.3,
		duration: 0.6,
		y: 30,
		opacity: 0,
		triggerOnce: true,
	});

	const bottomImageAnimation = useScrollAnimation({
		threshold: 0.3,
		delay: 1.3,
		duration: 0.8,
		y: 50,
		opacity: 0,
		triggerOnce: true,
	});

	return (
		<section className='min-h-screen w-full flex flex-col items-center bg-gray-50 px-4'>
			<div className='w-full max-w-md mx-auto min-h-screen flex flex-col py-16 relative' style={{ backgroundColor: '#F5F3EC' }}>
				{/* 첫 번째 말풍선 - SVG (ConversationSection 영역을 벗어나서 위쪽 섹션과 겹침) */}
				<motion.div
					ref={firstBubbleAnimation.ref}
					initial={firstBubbleAnimation.initial}
					animate={firstBubbleAnimation.animate}
					className='absolute -top-16 -left-2 z-30 flex justify-start'>
					<ChatBubbleSVG>
						<p className='font-medium text-gray-800'>
							이제 본격적으로
							<br />
							OO님의 사주팔자를
							<br />
							분석해볼 차례네요.
						</p>
					</ChatBubbleSVG>
				</motion.div>

				{/* 손으로 글쓰는 이미지 */}
				<motion.div
					ref={handAnimation.ref}
					initial={handAnimation.initial}
					animate={handAnimation.animate}
					className='relative flex items-end justify-start mt-8 mb-8 z-10 h-110'>
					<div className='w-19/20 h-auto relative'>
						<img src='/images/writing-hand.png' alt='글쓰는 손' className='w-full h-full object-contain' />

						{/* 슥슥 이미지 (손 이미지 위에 직접 겹침) */}
						<motion.div
							ref={writingTextAnimation.ref}
							initial={writingTextAnimation.initial}
							animate={writingTextAnimation.animate}
							className='absolute top-1/12 right-13/50 z-20'>
							<div className='w-18 h-auto'>
								<img src='/images/writing-text.png' alt='슥슥' className='w-full h-full object-contain' />
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* 두 번째 말풍선 - SVG */}
				<motion.div
					ref={secondBubbleAnimation.ref}
					initial={secondBubbleAnimation.initial}
					animate={secondBubbleAnimation.animate}
					className='relative flex justify-start mt-8 z-10'>
					<SecondChatBubbleSVG>
						<p className='font-medium text-gray-800'>
							제가 OO님의 사주를
							<br />
							보기 쉽게 표로 정리했어요
						</p>
					</SecondChatBubbleSVG>
				</motion.div>

				{/* 하단 이미지 */}
				<motion.div
					ref={bottomImageAnimation.ref}
					initial={bottomImageAnimation.initial}
					animate={bottomImageAnimation.animate}
					className='relative flex justify-center mt-8 mb-8 -top-20'>
					<div className='w-full h-auto'>
						<img src='/images/conversation-bottom.png' alt='하단 이미지' className='w-full h-auto object-contain' />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ConversationSection;
