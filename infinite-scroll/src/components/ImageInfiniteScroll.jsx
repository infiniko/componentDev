/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

export default function ImageInfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const placeHolder = useRef();

  async function fetchImages(page) {
    if (loading) return;
    setLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=4`
    );
    const imageData = await response.json();
    setData((prev) => [...prev, ...imageData]);
    setLoading(false);
  }

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (placeHolder.current) observer.observe(placeHolder.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="img-container">
      {data &&
        data.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            height="300px"
            width="450px"
          />
        ))}
      <div ref={placeHolder}></div>
    </div>
  );
}
