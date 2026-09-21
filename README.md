markdown
# phu-xuan-react — Bài 9

## Cài đặt & chạy

npm install
npm run dev

Mở http://localhost:5173

## Thành phần đã xây dựng
- TheDiaDanh — thẻ địa danh tái sử dụng qua props, có nút "Yêu thích" qua prop-hàm
- The — khung có children
- BoCucTrang — bố cục 3 khe JSX
- DanhSach — render props, hiển thị cùng dữ liệu theo 2 kiểu khác nhau
- HopThongBao / HopThongBaoThanhCong — kết hợp & chuyên biệt hóa
- Nut — nút tái sử dụng, phối hợp props (loai, kichThuoc) và children

## Vì sao chọn props/children như vậy (Lab 5)
Nut cần vừa tuỳ biến hình thức (màu theo `loai`, kích cỡ theo `kichThuoc`) vừa cho phép nhãn hiển thị tự do — nên `loai`/`kichThuoc` dùng props (tập giá trị cố định), còn nhãn nút dùng `children` (nội dung tự do).

## Ảnh chụp giao diện
![giao dien](./anh-chup/trang-danh-muc.png)