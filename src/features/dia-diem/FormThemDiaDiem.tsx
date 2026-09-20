import { useState, type ChangeEvent } from 'react'
import type { FormBundle } from '../../hooks/useForm'
import type { DuLieuDiaDiem } from './kiemChung'

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

// Chỉ lấy đúng những gì component con cần từ "bó" mà useForm trả về.
// Đây là kiểu props sau khi nâng state lên thành phần cha (Lab 5).
type FormThemDiaDiemProps = Pick<
  FormBundle<DuLieuDiaDiem>,
  'duLieu' | 'xuLyThayDoi' | 'xuLyRoiO' | 'loiCuaO' | 'xuLyGui' | 'dangGui'
>

export default function FormThemDiaDiem({
  duLieu,
  xuLyThayDoi,
  xuLyRoiO,
  loiCuaO,
  xuLyGui,
  dangGui,
}: FormThemDiaDiemProps) {
  // Tiện ích là danh sách nhiều lựa chọn, tách khỏi state đối tượng duLieu
  // để không làm phức tạp handler chính (Lab 2).
  const [tienIch, setTienIch] = useState<string[]>([])

  function xuLyTich(e: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target
    setTienIch((truoc) => (checked ? [...truoc, value] : truoc.filter((m) => m !== value)))
  }

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200)) // giả lập gọi máy chủ
    alert('Đã thêm: ' + gt.ten + ' — tiện ích: ' + (tienIch.join(', ') || '(không có)'))
    setTienIch([])
  })

  return (
    <form className="form-them-dia-diem" onSubmit={gui} noValidate>
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('ten') ? true : undefined}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
        {loiCuaO('ten') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('ten')}
          </p>
        )}
      </div>

      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        />
      </div>

      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="0"
          aria-invalid={loiCuaO('giaVe') ? true : undefined}
        />
        {loiCuaO('giaVe') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('giaVe')}
          </p>
        )}
      </div>

      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('phuong') ? true : undefined}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>
        {loiCuaO('phuong') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('phuong')}
          </p>
        )}
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
      {loiCuaO('dongY') && (
        <p role="alert" className="thong-bao-loi">
          {loiCuaO('dongY')}
        </p>
      )}

      <div className="hang-nut">
        <button type="submit" disabled={dangGui}>
          {dangGui ? 'Đang lưu...' : 'Thêm địa điểm'}
        </button>
      </div>
    </form>
  )
}
