import './Campo.css'

function Campo({ label, type, name, placeholder, value, onChange }) {
  return (
    <div className="campo">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Campo;