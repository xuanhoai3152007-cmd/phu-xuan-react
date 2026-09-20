import { useState, type ChangeEvent, type FormEvent } from 'react'
import { kiemChung, type DuLieuDiaDiem } from './kiemChung'

const GIA_TRI_BAN_DAU: DuLieuDiaDiem = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
}

// ... TienIch, DS_TIEN_ICH giữ nguyên như Lab 2 ...

export default function FormThemDiaDiem() {
  const [duLieu, setDuLieu] = useState<DuLieuDiaDiem>(GIA_TRI_BAN_DAU)
  const [tienIch, setTienIch] = useState<string[]>([])
  const [daCham, setDaCham] = useState<Record<string, boolean>>({})
  const [trangThai, setTrangThai] = useState<'cho' | 'dang-gui' | 'thanh-cong' | 'that-bai'>('cho')

  // Lỗi là trạng thái dẫn xuất — tính lại mỗi lần kết xuất
  const loi = kiemChung(duLieu)

  function xuLyThayDoi(/* giữ nguyên như Lab 1–2 */) { /* ... */ }
  function xuLyTich(/* giữ nguyên như Lab 2 */) { /* ... */ }

  function xuLyRoiO(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target
    setDaCham((truoc) => ({ ...truoc, [name]: true }))
  }

  function loiHienThi(ten: keyof DuLieuDiaDiem) {
    return daCham[ten] ? loi[ten] : undefined
  }

  async function xuLyGui(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const tatCaDaCham: Record<string, boolean> = {}
    Object.keys(GIA_TRI_BAN_DAU).forEach((k) => { tatCaDaCham[k] = true })
    setDaCham(tatCaDaCham)

    if (Object.keys(kiemChung(duLieu)).length > 0) return

    try {
      setTrangThai('dang-gui')
      await new Promise((giai) => setTimeout(giai, 1200))
      setTrangThai('thanh-cong')
      setDuLieu(GIA_TRI_BAN_DAU)
      setDaCham({})
    } catch {
      setTrangThai('that-bai')
    }
  }

  return (
    <form className="form-them-dia-diem" onSubmit={xuLyGui} noValidate>
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('ten') ? true : undefined}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
        {loiHienThi('ten') && (
          <p role="alert" className="thong-bao-loi">{loiHienThi('ten')}</p>
        )}
      </div>

      {/* Mô tả giữ nguyên */}

      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe" name="giaVe" type="number"
          value={duLieu.giaVe} onChange={xuLyThayDoi} onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('giaVe') ? true : undefined}
          placeholder="0"
        />
        {loiHienThi('giaVe') && (
          <p role="alert" className="thong-bao-loi">{loiHienThi('giaVe')}</p>
        )}
      </div>

      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong" name="phuong" value={duLieu.phuong}
          onChange={xuLyThayDoi} onBlur={xuLyRoiO}
          aria-invalid={loiHienThi('phuong') ? true : undefined}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiHienThi('phuong') && (
          <p role="alert" className="thong-bao-loi">{loiHienThi('phuong')}</p>
        )}
      </div>

      {/* fieldset Loại hình, fieldset Tiện ích giữ nguyên như Lab 2 */}

      <label className="hop-kiem-dong-y">
        <input name="dongY" type="checkbox" checked={duLieu.dongY} onChange={xuLyThayDoi} />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>
      {loiHienThi('dongY') && (
        <p role="alert" className="thong-bao-loi">{loiHienThi('dongY')}</p>
      )}

      {trangThai === 'thanh-cong' && (
        <p className="thong-bao-thanh-cong" role="status">Đã thêm địa điểm thành công!</p>
      )}
      {trangThai === 'that-bai' && (
        <p className="thong-bao-loi" role="alert">Có lỗi khi gửi, vui lòng thử lại.</p>
      )}

      <div className="hang-nut">
        <button type="submit" disabled={trangThai === 'dang-gui'}>
          {trangThai === 'dang-gui' ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
        <button type="button" onClick={() => { setDuLieu(GIA_TRI_BAN_DAU); setDaCham({}) }}>
          Nhập lại
        </button>
      </div>
    </form>
  )
}