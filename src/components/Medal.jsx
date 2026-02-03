function Medal({ label, color, count, onInc, onDec }) {
  return (
    <div className="medal">
      <span className="dot" style={{ background: color }} />
      <span className="label">{label}:</span>
      <span className="count">{count}</span>
      <div className="controls">
        <button onClick={onInc} aria-label={`Add ${label}`}>+</button>
        <button onClick={onDec} disabled={count === 0} aria-label={`Remove ${label}`}>−</button>
      </div>
    </div>
  );
}

export default Medal;
