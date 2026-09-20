import { useForm } from '../hooks/useForm'
import { kiemChung, type DuLieuDiaDiem } from '../features/dia-diem/kiemChung'
import FormThemDiaDiem from '../features/dia-diem/FormThemDiaDiem'

const GIA_TRI_BAN_DAU: DuLieuDiaDiem = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
}

export default function TrangThemDiaDiem() {
  const { duLieu, dangGui, xuLyThayDoi, xuLyRoiO, loiCuaO, xuLyGui } = useForm(
    GIA_TRI_BAN_DAU,
    kiemChung
  )

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200))
    alert('Đã thêm: ' + gt.ten)
  })

  return (
    <div className="trang-them-dia-diem">
      <h1>Thêm địa điểm mới</h1>
      <FormThemDiaDiem
        duLieu={duLieu}
        xuLyThayDoi={xuLyThayDoi}
        xuLyRoiO={xuLyRoiO}
        loiCuaO={loiCuaO}
        xuLyGui={gui}
        dangGui={dangGui}
      />
    </div>
  )
}