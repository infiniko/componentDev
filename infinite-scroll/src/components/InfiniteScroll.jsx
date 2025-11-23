import { useState } from "react";

const THRESHOLD = 50;

export default function InfiniteScroll() {
  const [data, setData] = useState(Array(40));
  const [isLoading, setIsLoading] = useState(false);

  function loadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...new Array(10)]);
      setIsLoading(false);
    }, 500);
  }

  function handleScroll(e) {
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const scrollHeight = e.target.scrollHeight;

    const remainingHeight = scrollHeight - (scrollTop + clientHeight);

    if (remainingHeight < THRESHOLD && !isLoading) {
      loadMore();
    }
  }
  return (
    <div onScroll={handleScroll} className="infi-scroll">
      {data.fill(0).map((_, index) => (
        <div className="cell" key={index}>
          {index + 1}
        </div>
      ))}
      {isLoading && <div className="loading">Loading more entries..</div>}
    </div>
  );
}
