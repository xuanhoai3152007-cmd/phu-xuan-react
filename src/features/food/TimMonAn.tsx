import {
  useEffect,
  useRef,
  useState,
} from "react";

function TimMonAn() {
  const oTimKiemRef =
    useRef<HTMLInputElement>(null);

  const soLanRenderRef =
    useRef(0);

  const [tuKhoa, setTuKhoa] =
    useState("");

  soLanRenderRef.current =
    soLanRenderRef.current + 1;

  console.log(
    "TimMonAn đã render:",
    soLanRenderRef.current,
    "lần"
  );

  useEffect(() => {
    oTimKiemRef.current?.focus();
  }, []);

  return (
    <div className="search-box">

      <h2>🔎 Tìm món ăn</h2>

      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) =>
          setTuKhoa(e.target.value)
        }
        placeholder="Tìm bún bò, cơm hến, bánh bèo…"
      />

      <p>
        Từ khóa:{" "}
        <strong>{tuKhoa}</strong>
      </p>

      <p>
        Đã render{" "}
        {soLanRenderRef.current} lần
      </p>

    </div>
  );
}

export default TimMonAn;    