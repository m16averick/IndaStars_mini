import "./SmallToggle.scss";

const SmallToggle = ({ text, value, setValue }) => {
  return (
    <div className="smallToggle">
      {text}
      <input type="checkbox" checked={value} onChange={(e) => setValue(!value)} />
    </div>
  );
};

export { SmallToggle };
