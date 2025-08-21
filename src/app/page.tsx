'use client'

import { observer } from 'mobx-react-lite'
import ChapterSection from '@/components/ChapterSection'
import ConversationSection from '@/components/ConversationSection'
import ChatBubble from '@/components/ChatBubble'
import SajuTable from '@/components/SajuTable'
import ScrollAnimatedContainer from '@/components/ScrollAnimatedContainer'

const HomePage = observer(() => {
  return (
    <div className="bg-gray-50">
      {/* 첫 번째 섹션: 제 1장 소개 (배경 이미지 포함) */}
      <ChapterSection />

      {/* 두 번째 섹션: 대화 섹션 */}
      <ConversationSection />

      {/* 세 번째 섹션: 메인 콘텐츠 */}
      <section className="min-h-screen flex flex-col items-center px-4 py-16">
        <div className="w-full max-w-md mx-auto flex flex-col gap-8" style={{ backgroundColor: '#F5F3EC', minHeight: '100vh', padding: '2rem 1rem' }}>
          {/* 대화 영역 */}
          <div className="space-y-6 flex-1">
            <ScrollAnimatedContainer delay={0.2} y={30}>
              <ChatBubble
                message="안녕하세요! 사주팔자를 확인해보세요."
                isUser={false}
              />
            </ScrollAnimatedContainer>
            
            <ScrollAnimatedContainer delay={0.4} y={30}>
              <ChatBubble
                message="네, 확인해주세요!"
                isUser={true}
              />
            </ScrollAnimatedContainer>

            <ScrollAnimatedContainer delay={0.6} y={30}>
              <ChatBubble
                message="귀하의 사주팔자 정보입니다. 아래 표를 확인해주세요."
                isUser={false}
              />
            </ScrollAnimatedContainer>
          </div>

          {/* 사주팔자 표 */}
          <ScrollAnimatedContainer delay={0.8} y={50} duration={0.8}>
            <SajuTable />
          </ScrollAnimatedContainer>

          {/* 추가 정보 영역 */}
          <ScrollAnimatedContainer delay={1.0} y={30}>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">운세 요약</h3>
              <p className="text-sm text-gray-600">
                오늘은 새로운 시작에 좋은 날입니다. 
                적극적인 행동이 좋은 결과를 가져올 것입니다.
              </p>
            </div>
          </ScrollAnimatedContainer>
        </div>
      </section>
    </div>
  )
})

export default HomePage