'use client'

import { motion } from 'framer-motion'

/**
 * ## 사주팔자 표 컴포넌트
 *
 * 이 컴포넌트는 **전통적인 사주팔자 표**를 구현하고 **한자 데이터**를 표 형태로 표시합니다.
 *
 * ### 주요 기능
 * - 년주, 월주, 일주, 시주의 천간지지 표시
 * - 더미 데이터를 활용한 전통적인 사주팔자 형태
 * - 반응형 디자인으로 모든 화면 크기에서 일관된 표시
 *
 * @returns {JSX.Element} 사주팔자 **표 컴포넌트**
 *
 * @example
 * ```javascript
 * // 사주팔자 표 사용
 * <SajuTable />
 * ```
 */
const SajuTable = () => {
  // 더미 사주팔자 데이터
  const sajuData = {
    year: { cheon: '甲', ji: '子' },
    month: { cheon: '丙', ji: '寅' },
    day: { cheon: '戊', ji: '辰' },
    time: { cheon: '庚', ji: '午' }
  }

  const columnData = [
    { title: '時柱', cheon: sajuData.time.cheon, ji: sajuData.time.ji },
    { title: '日柱', cheon: sajuData.day.cheon, ji: sajuData.day.ji },
    { title: '月柱', cheon: sajuData.month.cheon, ji: sajuData.month.ji },
    { title: '年柱', cheon: sajuData.year.cheon, ji: sajuData.year.ji }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
    >
      <h2 className="text-center text-lg font-bold text-gray-800 mb-4">
        사주팔자
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columnData.map((column, index) => (
                <th
                  key={index}
                  className="border border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {columnData.map((column, index) => (
                <td
                  key={index}
                  className="border border-gray-300 text-center px-3 py-4"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {column.cheon}
                  </div>
                  <div className="text-xs text-gray-500">天干</div>
                </td>
              ))}
            </tr>
            <tr>
              {columnData.map((column, index) => (
                <td
                  key={index}
                  className="border border-gray-300 text-center px-3 py-4"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {column.ji}
                  </div>
                  <div className="text-xs text-gray-500">地支</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default SajuTable