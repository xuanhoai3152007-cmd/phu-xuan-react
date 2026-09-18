import '../styles/Bài7.css';
import ThuSuKien from '../components/Bài7/ThuSuKien';
import DanhSachDiaDanh from '../components/Bài7/DanhSachDiaDanh';
import KhamPhaDiaDanh from '../components/Bài7/KhamPhaDiaDanh';
import LuotThichMonAn from '../components/Bài7/LuotThichMonAn';
import TimMonAnHue from '../components/Bài7/TimMonAnHue';
import MonAnYeuThich from '../components/Bài7/MonAnYeuThich';

export default function Bài7Page() {
  return (
    <main className="trang-Bài7">
      <h1>Bài 7 — Quản lý sự kiện trong React</h1>
      <ThuSuKien />
      <DanhSachDiaDanh />
      <KhamPhaDiaDanh />
      <LuotThichMonAn />
      <TimMonAnHue />
      <MonAnYeuThich />
    </main>
  );
}
