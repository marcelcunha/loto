import { createContext } from "react";
import UseFetch from "../hooks/useFetch";

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const { data: results, loading } = UseFetch("/mega-sena");

  return (
    <ResultContext.Provider value={{ results }}>
      {children}
    </ResultContext.Provider>
  );
};
