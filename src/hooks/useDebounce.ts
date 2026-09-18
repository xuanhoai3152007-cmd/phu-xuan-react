import {
  useEffect,
  useState,
} from "react";

function useDebounce<T>(
  giaTri: T,
  doTre: number
) {
  const [giaTriDaTre, setGiaTriDaTre] =
    useState(giaTri);

  useEffect(() => {
    const id = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    return () => {
      clearTimeout(id);
    };
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;