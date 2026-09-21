import BoCucTrang from '../components/BoCucTrang'
import TheDiaDanh from '../components/TheDiaDanh'
import HopThongBao, { HopThongBaoThanhCong } from '../components/HopThongBao'
import DanhSach from '../components/DanhSach'
import { DANH_SACH_DIA_DANH } from '../du-lieu/diaDanh'
import { DANH_SACH_MON_AN } from '../du-lieu/monAn'

function TrangDanhMuc() {
  const soLuong = DANH_SACH_DIA_DANH.length

  function xuLyYeuThich(ten: string) {
    alert('Đã thêm "' + ten + '" vào danh sách yêu thích!')
  }

  return (
    <BoCucTrang
      thanhDieuHuong="Danh mục địa danh Huế"
      chanTrang={<span>© 2026 phu-xuan-react</span>}
      noiDungChinh={
        <>
          <HopThongBao>Hiện có {soLuong} địa danh đang được giới thiệu.</HopThongBao>

          <HopThongBaoThanhCong>Dữ liệu đã tải xong.</HopThongBaoThanhCong>

          <h2>Địa danh nổi bật</h2>
          <div className="luoi-dia-danh">
            {DANH_SACH_DIA_DANH.map((dd) => (
              <TheDiaDanh
                key={dd.id}
                anh={dd.anh}
                ten={dd.ten}
                moTa={dd.moTa}
                hanhDong={xuLyYeuThich}
                nhanHanhDong="♡ Yêu thích"
              />
            ))}
          </div>

          <h2>Ẩm thực (kiểu chữ)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon) => (
              <strong>
                {mon.ten} — {mon.gia.toLocaleString('vi-VN')}đ
              </strong>
            )}
          />

          <h2>Ẩm thực (kiểu có nút)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon) => (
              <span>
                {mon.ten} <button onClick={() => alert('Đã đặt: ' + mon.ten)}>Đặt món</button>
              </span>
            )}
          />
        </>
      }
    />
  )
}

export default TrangDanhMuc