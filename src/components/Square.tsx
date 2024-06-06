import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState<string | null>(null);

  const handleClick = () => {
    setValue("X");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
