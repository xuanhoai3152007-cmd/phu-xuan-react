import '../styles/Bai7.css'
import ThuSuKien from '../components/Bai7/ThuSuKien'
import DanhSachDiaDanh from '../components/Bai7/DanhSachDiaDanh'

export default function Bai7Page() {
  return (
    <main className="trang-bai7">
      <h1>Bài 7 — Quản lý sự kiện trong React</h1>
      <ThuSuKien />
      <DanhSachDiaDanh />
    </main>
  )
}