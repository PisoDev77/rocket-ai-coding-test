import { useRef, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  duration?: number
  y?: number
  x?: number
  scale?: number
  opacity?: number
}

/**
 * ## 스크롤 애니메이션 커스텀 훅
 *
 * 이 훅은 **스크롤 위치에 따른 애니메이션**을 제공하고 **Framer Motion**을 활용한 부드러운 효과를 구현합니다.
 *
 * ### 주요 기능
 * - 요소가 뷰포트에 들어올 때 자동 애니메이션 실행
 * - 다양한 애니메이션 옵션 제공 (위치, 크기, 투명도)
 * - 한 번만 실행 또는 반복 실행 선택 가능
 * - 지연 시간 및 지속 시간 조정 가능
 *
 * @param {ScrollAnimationOptions} options - **애니메이션 설정 옵션**
 * @returns {object} ref와 controls를 포함한 **애니메이션 객체**
 *
 * @example
 * ```javascript
 * // 기본 사용법
 * const { ref, controls } = useScrollAnimation()
 * 
 * // 커스텀 옵션
 * const { ref, controls } = useScrollAnimation({
 *   threshold: 0.3,
 *   delay: 0.2,
 *   y: 50
 * })
 * ```
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    duration = 0.6,
    y = 30,
    x = 0,
    scale = 1,
    opacity = 0
  } = options

  const ref = useRef(null)
  const isInView = useInView(ref, { 
    threshold, 
    triggerOnce 
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      })
    } else if (!triggerOnce) {
      controls.start({
        opacity,
        y,
        x,
        scale,
        transition: {
          duration: duration * 0.5,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      })
    }
  }, [isInView, controls, delay, duration, y, x, scale, opacity, triggerOnce])

  const initialAnimation = {
    opacity,
    y,
    x,
    scale
  }

  return {
    ref,
    controls,
    initial: initialAnimation,
    animate: controls
  }
}