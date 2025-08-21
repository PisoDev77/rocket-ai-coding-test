'use client'

import { motion } from 'framer-motion'

interface ChatBubbleProps {
  message: string
  isUser: boolean
}

/**
 * ## 말풍선 컴포넌트
 *
 * 이 컴포넌트는 **채팅 메시지**를 말풍선 형태로 표시하고 **사용자/시스템 구분**에 따라 다른 스타일을 적용합니다.
 *
 * ### 주요 기능
 * - 사용자와 시스템 메시지에 따른 다른 스타일 적용
 * - 반응형 디자인으로 화면 크기에 맞춰 조정
 * - Framer Motion을 활용한 애니메이션 효과
 *
 * @param {string} message - 표시할 **메시지 내용**
 * @param {boolean} isUser - **사용자 메시지 여부** (true: 사용자, false: 시스템)
 * @returns {JSX.Element} 스타일이 적용된 **말풍선 컴포넌트**
 *
 * @example
 * ```javascript
 * // 사용자 메시지
 * <ChatBubble message="안녕하세요" isUser={true} />
 * 
 * // 시스템 메시지
 * <ChatBubble message="반갑습니다" isUser={false} />
 * ```
 */
const ChatBubble = ({ message, isUser }: ChatBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`
          max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm break-words
          ${
            isUser
              ? 'bg-blue-500 text-white rounded-br-sm'
              : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
          }
        `}
      >
        {message}
      </div>
    </motion.div>
  )
}

export default ChatBubble