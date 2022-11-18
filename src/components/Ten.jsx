import { useState } from "react";
import PropTypes from 'prop-types';

const Ten = ({ handleSelected, children }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (handleSelected(children)) {
      setSelected(!selected);
    }
    selected(false);
  };

  return (
    <button
      className={`text-white rounded-full p-1 h-16 w-16 flex justify-center items-center font-bold text-2xl   ${
        selected
          ? "bg-red-500 hover:bg-red-700"
          : "bg-green-500 hover:bg-green-700"
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Ten.propTypes = {
  handleSelected: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default Ten;
