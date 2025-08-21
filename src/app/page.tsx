'use client';

import { observer } from 'mobx-react-lite';
import ChapterSection from '@/components/ChapterSection';
import ChatBubble from '@/components/ChatBubble';
import SajuTable from '@/components/SajuTable';
import ScrollAnimatedContainer from '@/components/ScrollAnimatedContainer';
import ConversationSection from '@/components/ConversationSection';

const HomePage = observer(() => {
	return (
		<div className='bg-gray-50'>
			{/* 첫 번째 섹션: 제 1장 소개 (배경 이미지 포함) */}
			<ChapterSection />

			<ConversationSection />

			{/* 두 번째 섹션: 사주팔자 표 */}
			<section className='min-h-screen flex flex-col items-center px-4 py-16'>
				<div className='w-full max-w-md flex flex-col px-4' style={{ backgroundColor: '#F5F3EC', minHeight: '100vh' }}>
					{/* 사주팔자 표 */}
					<ScrollAnimatedContainer delay={0.3} y={50} duration={0.8}>
						<SajuTable />
					</ScrollAnimatedContainer>
				</div>
			</section>
		</div>
	);
});

export default HomePage;
