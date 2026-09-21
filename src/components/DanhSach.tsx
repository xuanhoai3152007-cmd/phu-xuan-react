import type { ReactNode } from 'react'
import './DanhSach.css'

interface MucCoId {
  id: number | string
}

interface DanhSachProps<T extends MucCoId> {
  cacMuc: T[]
  hienThiMuc: (muc: T) => ReactNode
}

// DanhSach lo phần khung <ul> và vòng lặp; việc vẽ MỖI mục được giao
// cho nơi gọi qua prop-hàm hienThiMuc — đây chính là mẫu "render props".
function DanhSach<T extends MucCoId>({ cacMuc, hienThiMuc }: DanhSachProps<T>) {
  return (
    <ul className="danh-sach">
      {cacMuc.map((muc) => (
        <li key={muc.id}>{hienThiMuc(muc)}</li>
      ))}
    </ul>
  )
}

export default DanhSach