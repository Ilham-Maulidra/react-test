import "./Button.css";

function Button({ label, variant = "primary", onClick }) {
  return (
    <button onClick={onClick} className={`btn ${variant}`}>
      {label}
    </button>
  );
}

export { Button };
