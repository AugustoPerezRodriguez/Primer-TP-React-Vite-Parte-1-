import './TextArea.css'

function TextArea({ label, name }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <textarea
        name={name}
        className="u-full-width"
      ></textarea>
    </div>
  );
}

export default TextArea;