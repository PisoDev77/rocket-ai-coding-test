'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface ScrollAnimatedContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  x?: number
  threshold?: number
  triggerOnce?: boolean
}

/**
 * ## 스크롤 애니메이션 컨테이너 컴포넌트
 *
 * 이 컴포넌트는 **자식 요소들을 감싸서** 스크롤 애니메이션을 쉽게 적용할 수 있도록 하는 **래퍼 컴포넌트**입니다.
 *
 * ### 주요 기능
 * - useScrollAnimation 훅을 내부적으로 사용
 * - 간단한 props로 애니메이션 커스터마이징
 * - 재사용 가능한 스크롤 애니메이션 래퍼
 *
 * @param {ReactNode} children - **감쌀 자식 요소들**
 * @param {string} className - **추가 CSS 클래스**
 * @param {number} delay - **애니메이션 지연 시간**
 * @param {number} duration - **애니메이션 지속 시간**
 * @param {number} y - **Y축 초기 위치**
 * @param {number} x - **X축 초기 위치**
 * @param {number} threshold - **뷰포트 교차 임계값**
 * @param {boolean} triggerOnce - **한 번만 실행 여부**
 * @returns {JSX.Element} 애니메이션이 적용된 **컨테이너 컴포넌트**
 *
 * @example
 * ```javascript
 * // 기본 사용법
 * <ScrollAnimatedContainer>
 *   <div>애니메이션될 내용</div>
 * </ScrollAnimatedContainer>
 * 
 * // 커스텀 옵션
 * <ScrollAnimatedContainer delay={0.2} y={50} duration={0.8}>
 *   <ChatBubble message="안녕하세요" isUser={false} />
 * </ScrollAnimatedContainer>
 * ```
 */
const ScrollAnimatedContainer = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  threshold = 0.1,
  triggerOnce = true
}: ScrollAnimatedContainerProps) => {
  const { ref, initial, animate } = useScrollAnimation({
    delay,
    duration,
    y,
    x,
    threshold,
    triggerOnce
  })

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimatedContainer