

function Campo({ label, type, name, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="u-full-width"
      />
    </div>
  );
}

export default Campo;