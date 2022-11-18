import { useState } from "react";

const Filter = () => {
  const [init, setInit] = useState('');
  const [end, setEnd] = useState(Date(Date.now()));

  return (
    <div className="flex justify-end gap-3">
      <input
        type="date"
        value={init}
        onChange={(e) => setInit(e.target.value)}
      />
      <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
    </div>
  );
};

export default Filter;
