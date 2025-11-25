import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSorty] = useState("userId");
  const [sortOrder, setSortOrder] = useState("asc");

  useState(() => {
    async function fetchPosts() {
      const resposne = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await resposne.json();
      setPosts(data);
      setFilteredPosts(data);
    }

    fetchPosts();
  }, []);

  function handleSearch(value) {
    setQuery(value);
    let filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    filteredPosts = sortPosts(filteredPosts, sortBy, sortOrder);
    setFilteredPosts(filteredPosts);
  }

  function sortPosts(postsOrig, field, order) {
    const sortedPosts = [...postsOrig].sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];
      const isAsc = order === "asc";
      if (typeof valueA === "number") {
        return isAsc ? valueA - valueB : valueB - valueA;
      }
      return isAsc
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    return sortedPosts;
  }

  function handleSort(value) {
    setSorty(value);

    setFilteredPosts(sortPosts(filteredPosts, value, sortOrder));
  }

  function handleSortOrder(value) {
    setSortOrder(value);
    setFilteredPosts(sortPosts(filteredPosts, sortBy, value));
  }

  return (
    <div>
      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span>Search: </span>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div>
          <span>Sort by: </span>
          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="userId">User ID</option>
            <option value="title">Title</option>
            <option value="body">Description</option>
          </select>
        </div>
        <div>
          <span>Sort order: </span>
          <select
            value={sortOrder}
            onChange={(e) => handleSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      {filteredPosts.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!filteredPosts.length && (
        <h1 style={{ margin: "50px" }}>EMPTY RESPONSE</h1>
      )}
    </div>
  );
}

export default App;
