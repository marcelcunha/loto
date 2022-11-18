import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

import PropTypes from 'prop-types';

const Item = ({ num, page }) => {
  return (
    <button
      className={`inline-flex items-center border-t-2  px-4 pt-4 text-sm font-medium ${
        num == page
          ? "border-indigo-500 text-indigo-600"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {num}
    </button>
  );
};

const Paginator = ({ data, perPage = 15, items }) => {
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [linksArray, setLinksArray] = useState([]);
  const [page, setPage] = useState(1);

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  useEffect(() => {
    setPaginatedItems(chunk(data, perPage));
    const size = paginatedItems.length;

  }, []);

  useEffect(() => {
    console.log(paginatedItems, data);
    items(paginatedItems[page - 1]);
  }, [page]);

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <button
          disabled={page == 1}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Anterior
        </button>
      </div>
      {
      paginatedItems.map((item, idx) => {
        return <Item key={idx} num={idx + 1} page={page} />;
      })}

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          disabled={page == paginatedItems.length}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Próximo
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
};

Paginator.propTypes = {
    data: PropTypes.array.isRequired,
    perPage: PropTypes.number,
    items: PropTypes.func.isRequired
};

Item.propTypes = {
    num: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
};

export default Paginator;
