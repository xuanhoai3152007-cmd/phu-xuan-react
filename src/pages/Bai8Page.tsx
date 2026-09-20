import '../styles/Bai8.css'
import FormThemDiaDiem from '../features/dia-diem/FormThemDiaDiem'
import FormGopY from '../features/gop-y/FormGopY'
// ...
<section className="lab">
  <h2>Lab 4 — Form Góp ý (dùng lại hook useForm)</h2>
  <FormGopY />
</section>

export default function Bai8Page() {
  return (
    <main className="trang-bai8">
      <h1>Bài 8 — Biểu mẫu có kiểm soát</h1>
      <section className="lab">
        <h2>Lab 1–3 — Thêm địa điểm tham quan</h2>
        <FormThemDiaDiem />
      </section>
    </main>
  )
}