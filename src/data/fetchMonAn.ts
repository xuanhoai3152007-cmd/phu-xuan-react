import danhSachMonAn from "./mon-an.json";

interface MonAn {
  id: number;
  ten: string;
  gia: number;
  moTa: string;
}

function fetchMonAn(
  id: number
): Promise<MonAn | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const monAn = danhSachMonAn.find(
        (m) => m.id === id
      );

      resolve(monAn);
    }, 800);
  });
}

export default fetchMonAn;