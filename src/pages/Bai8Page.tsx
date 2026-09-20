import '../styles/Bai8.css'
import TrangThemDiaDiem from './TrangThemDiaDiem'
import FormGopY from '../features/gop-y/FormGopY'

export default function Bai8Page() {
  return (
    <main className="trang-bai8">
      <h1>Bài 8 — Biểu mẫu có kiểm soát</h1>
      <TrangThemDiaDiem />
      <section className="lab">
        <h2>Lab 4 — Form Góp ý (dùng lại hook useForm)</h2>
        <FormGopY />
      </section>
    </main>
  )
}