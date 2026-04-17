import './TextArea.css'

function TextArea({ label, name, value, onChange }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <textarea
        name={name}
        className="u-full-width"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextArea;