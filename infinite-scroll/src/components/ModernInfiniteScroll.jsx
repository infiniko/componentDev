import { useEffect, useRef, useState } from "react";

export default function ModernInfiniteScroll() {
  const [data, setData] = useState([...new Array(20)]);
  const [loading, setLoading] = useState(false);
  let lastRef = useRef(null);

  function loadMore() {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...new Array(10)]);
      setLoading(false);
    }, 500);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );
    const lastElement = lastRef.current;
    observer.observe(lastElement);

    return () => observer.disconnect();
  }, [data.length]);
  return (
    <div>
      {data.map((_, index) => (
        <div className="row-item" key={index}>
          {index + 1}
        </div>
      ))}
      <div ref={lastRef}></div>
      {loading && <div className="row-item">Loading...</div>}
    </div>
  );
}
