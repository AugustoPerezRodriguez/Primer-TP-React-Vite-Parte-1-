import './Campo.css'

function Campo({ label, type, name, placeholder }) {
  return (
    <div className="campo">
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