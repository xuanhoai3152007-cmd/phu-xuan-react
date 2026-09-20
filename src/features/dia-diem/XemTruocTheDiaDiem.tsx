import type { DuLieuDiaDiem } from './kiemChung'

interface XemTruocTheDiaDiemProps {
  duLieu: DuLieuDiaDiem
}

const NHAN_PHUONG: Record<string, string> = {
  'phu-hau': 'Phú Hậu',
  'huong-long': 'Hương Long',
  'thuy-bieu': 'Thuỷ Biều',
  'vy-da': 'Vỹ Dạ',
}

export default function XemTruocTheDiaDiem({ duLieu }: XemTruocTheDiaDiemProps) {
  return (
    <aside className="the-xem-truoc">
      <h3>{duLieu.ten || 'Tên địa điểm sẽ hiện ở đây'}</h3>
      <p>{duLieu.moTa || 'Mô tả ngắn sẽ hiện ở đây...'}</p>
      <p>
        Giá vé:{' '}
        {duLieu.giaVe ? Number(duLieu.giaVe).toLocaleString('vi-VN') + ' đ' : 'Chưa nhập'}
      </p>
      <p>Phường: {NHAN_PHUONG[duLieu.phuong] || 'Chưa chọn'}</p>
      <p>
        Loại hình: {duLieu.loaiHinh === 'di-tich' ? 'Di tích lịch sử' : 'Điểm ẩm thực'}
      </p>
    </aside>
  )
}
