/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-02-29 10:15
 * @LastAuthor : wangchao
 * @LastTime   : 2024-02-29 10:17
 * @desc       : 
 */

export default function TestLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Test 顶部布局</h1>
      {children}
    </div>
  )
}