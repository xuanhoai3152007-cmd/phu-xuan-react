import { useState, type ChangeEvent } from 'react'

interface DuLieuDiaDiem {
  ten: string
  moTa: string
  giaVe: string
  phuong: string
  loaiHinh: string
  dongY: boolean
}

const GIA_TRI_BAN_DAU: DuLieuDiaDiem = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
}

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<DuLieuDiaDiem>(GIA_TRI_BAN_DAU)

  function xuLyThayDoi(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target
    const { name, value } = target
    const laCheckbox = target instanceof HTMLInputElement && target.type === 'checkbox'
    const checked = target instanceof HTMLInputElement ? target.checked : false

    setDuLieu((truoc) => ({
      ...truoc,
      [name]: laCheckbox ? checked : value,
    }))
  }

  return (
    <form className="form-them-dia-diem">
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
      </div>

      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea id="moTa" name="moTa" rows={4} value={duLieu.moTa} onChange={xuLyThayDoi} />
      </div>

      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select id="phuong" name="phuong" value={duLieu.phuong} onChange={xuLyThayDoi}>
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
      </div>

      {/* Dòng debug tạm thời — xoá ở bước cuối */}
      <pre>{JSON.stringify(duLieu, null, 2)}</pre>
    </form>
  )
}