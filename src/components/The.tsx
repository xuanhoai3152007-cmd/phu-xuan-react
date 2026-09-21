import type { ReactNode } from 'react'
import './The.css'

interface TheProps {
  tieuDe?: string
  children: ReactNode
}

function The({ tieuDe, children }: TheProps) {
  return (
    <div className="the">
      {tieuDe && <div className="the__dau">{tieuDe}</div>}
      <div className="the__than">{children}</div>
    </div>
  )
}

export default The