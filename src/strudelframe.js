import "./App.css";

export function StrudelFrame() {
  return (
    <iframe
      style={{
        display: "flex",
        flexGrow: 1,
        minWidth: "50%",
        boxSizing: "border-box",
        border: "0px",
      }}
      title="strudel embed"
      src="http://localhost:4321/"
    ></iframe>
  );
}
