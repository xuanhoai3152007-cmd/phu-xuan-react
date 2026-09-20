import { useForm } from '../../hooks/useForm'

interface DuLieuGopY {
  hoTen: string
  noiDung: string
}

const GIA_TRI_BAN_DAU: DuLieuGopY = { hoTen: '', noiDung: '' }

function kiemChungGopY(d: DuLieuGopY) {
  const loi: Partial<Record<keyof DuLieuGopY, string>> = {}
  if (!d.hoTen.trim()) loi.hoTen = 'Vui lòng nhập họ tên.'
  if (d.noiDung.trim().length < 10) loi.noiDung = 'Góp ý cần ít nhất 10 ký tự.'
  return loi
}

export default function FormGopY() {
  const { duLieu, dangGui, xuLyThayDoi, xuLyRoiO, loiCuaO, xuLyGui, datLai } = useForm(
    GIA_TRI_BAN_DAU,
    kiemChungGopY
  )

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 800))
    alert('Cảm ơn góp ý của ' + gt.hoTen)
    datLai()
  })

  return (
    <form className="form-gop-y" onSubmit={gui} noValidate>
      <div className="truong">
        <label htmlFor="hoTen">Họ tên</label>
        <input id="hoTen" name="hoTen" value={duLieu.hoTen} onChange={xuLyThayDoi} onBlur={xuLyRoiO} />
        {loiCuaO('hoTen') && <p role="alert" className="thong-bao-loi">{loiCuaO('hoTen')}</p>}
      </div>
      <div className="truong">
        <label htmlFor="noiDung">Góp ý</label>
        <textarea id="noiDung" name="noiDung" rows={4} value={duLieu.noiDung} onChange={xuLyThayDoi} onBlur={xuLyRoiO} />
        {loiCuaO('noiDung') && <p role="alert" className="thong-bao-loi">{loiCuaO('noiDung')}</p>}
      </div>
      <button type="submit" disabled={dangGui}>{dangGui ? 'Đang gửi...' : 'Gửi góp ý'}</button>
    </form>
  )
}