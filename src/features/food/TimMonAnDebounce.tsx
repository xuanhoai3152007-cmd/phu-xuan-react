import { useState } from "react";

import useDebounce from "../../hooks/useDebounce";

import danhSachMonAn from "../../data/mon-an.json";

function TimMonAnDebounce() {
  const [tuKhoa, setTuKhoa] =
    useState("");

  const tuKhoaDaTre =
    useDebounce(tuKhoa, 300);

  console.log(
    "Đang lọc theo từ khóa:",
    tuKhoaDaTre
  );

  const danhSachLoc =
    danhSachMonAn.filter((monAn) =>
      monAn.ten
        .toLowerCase()
        .includes(
          tuKhoaDaTre
            .toLowerCase()
            .trim()
        )
    );

  return (
    <div className="search-box">

      <h2>
        🔍 Tìm món ăn có Debounce
      </h2>

      <input
        value={tuKhoa}
        onChange={(e) =>
          setTuKhoa(e.target.value)
        }
        placeholder="Gõ tên món ăn..."
      />

      <div className="food-results">

        {danhSachLoc.map((monAn) => (
          <div
            key={monAn.id}
            className="food-item"
          >
            <strong>
              {monAn.ten}
            </strong>

            <span>
              {" "}
              —{" "}
              {monAn.gia.toLocaleString(
                "vi-VN"
              )}đ
            </span>

            <p>{monAn.moTa}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default TimMonAnDebounce;