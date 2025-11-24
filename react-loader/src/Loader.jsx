function Loader({ fullScreen }) {
  return (
    <div className={fullScreen ? "fullScreen" : ""}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
