import { useContext, useState } from "react";
import Filter from "../components/Filter";
import Paginator from "../components/Paginator";
import { ResultContext } from "../context/ResultContext";

const Results = () => {
  const { results } = useContext(ResultContext);
  const [items, setItems] = useState([]);


  return (
    <div className=" overflow-x-auto ">
      <Filter />
      <div className=" inline-block w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Concurso
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Data
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Dezenas
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {items?.map((result, idx) => (
                <tr
                  key={result.idx}
                  className={idx % 2 === 0 ? undefined : "bg-gray-50"}
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {result.concurso}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {result.data}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex gap-2">
                    {result.dezenas.map((ten, idx) => {
                      return (
                        <div key={idx} className="text-bold">
                          {ten}
                        </div>
                      );
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginator data={results} items={(i)=>setItems(i)} />
    </div>
  );
};

export default Results;
