function TextArea({ label, name }) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        name={name}
        className="u-full-width"
      ></textarea>
    </div>
  );
}

export default TextArea;