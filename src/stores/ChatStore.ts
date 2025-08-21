import { makeAutoObservable } from 'mobx'

interface ChatMessage {
  id: string
  message: string
  isUser: boolean
  timestamp: Date
}

/**
 * ## 채팅 상태 관리 스토어
 *
 * 이 클래스는 **채팅 메시지 상태**를 관리하고 **MobX**를 활용한 반응형 상태 업데이트를 제공합니다.
 *
 * ### 주요 기능
 * - 채팅 메시지 목록 관리
 * - 새로운 메시지 추가 기능
 * - MobX를 활용한 자동 상태 업데이트
 */
class ChatStore {
  messages: ChatMessage[] = [
    {
      id: '1',
      message: '안녕하세요! 사주팔자를 확인해보세요.',
      isUser: false,
      timestamp: new Date()
    },
    {
      id: '2', 
      message: '네, 확인해주세요!',
      isUser: true,
      timestamp: new Date()
    }
  ]

  constructor() {
    makeAutoObservable(this)
  }

  /**
   * ## 새로운 메시지 추가
   *
   * 이 메서드는 **새로운 채팅 메시지**를 추가하고 **고유 ID**와 **타임스탬프**를 자동으로 생성합니다.
   *
   * @param {string} message - 추가할 **메시지 내용**
   * @param {boolean} isUser - **사용자 메시지 여부**
   *
   * @example
   * ```javascript
   * // 사용자 메시지 추가
   * chatStore.addMessage('안녕하세요', true)
   * ```
   */
  addMessage = (message: string, isUser: boolean) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      message,
      isUser,
      timestamp: new Date()
    }
    this.messages.push(newMessage)
  }
}

export const chatStore = new ChatStore()
export default ChatStore