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

interface TienIch {
  ma: string
  ten: string
}

const DS_TIEN_ICH: TienIch[] = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
]

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<DuLieuDiaDiem>(GIA_TRI_BAN_DAU)
  const [tienIch, setTienIch] = useState<string[]>([])

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

  function xuLyTich(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target
    setTienIch((truoc) => (checked ? [...truoc, value] : truoc.filter((m) => m !== value)))
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
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          placeholder="0"
        />
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

      <fieldset>
        <legend>Loại hình</legend>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />
          Di tích lịch sử
        </label>
        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      <label className="hop-kiem-dong-y">
        <input name="dongY" type="checkbox" checked={duLieu.dongY} onChange={xuLyThayDoi} />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>
    </form>
  )
}