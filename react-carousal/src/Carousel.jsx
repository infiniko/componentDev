import { useEffect, useRef, useState } from "react";

export default function Carousel({ data }) {
  const [activeImage, setActiveImage] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => nextSlide(), 3000);

    return () => clearInterval(interval.current);
  }, []);

  function prevSlide() {
    setActiveImage((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }
  function nextSlide() {
    setActiveImage((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }
  function handleDot(index) {
    setActiveImage(index);
  }

  return (
    <div className="wrapper">
      <img src={data[activeImage].imageUrl} width="800px" height="450px" />
      <button className="btn prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="btn next" onClick={nextSlide}>
        &gt;
      </button>
      <div className="dots">
        {Array(data.length)
          .fill(null)
          .map((_, i) => (
            <button
              key={i}
              className={`dot ${activeImage === i ? "active" : ""}`}
              onClick={() => handleDot(i)}
            ></button>
          ))}
      </div>
    </div>
  );
}
