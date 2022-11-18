import { useState } from "react";
import Ten from "./Ten";

const AllTens = () => {
  const [selecteds, setSelecteds] = useState([]);

  const handleSelected = (value) => {
    if (selecteds.length < 6) {
      setSelecteds([...selecteds, value]);
      return true;
    }
    return false;
  };

  const buildTens = () => {
    let content = [];

    for (let i = 1; i <= 60; i++) {
      content.push(
        <Ten key={i} handleSelected={handleSelected}>
          {i}
        </Ten>
      );
    }
    return content;
  };

  return (
    <div className="mx-auto gap-3 flex md:w-[800px]  flex-wrap justify-center">
      {buildTens()}
    </div>
  );
};

export default AllTens;
