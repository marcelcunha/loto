import { useEffect, useState } from "react";
import http from "../../services/api";

const UseFetch = (url ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    http
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, data, error };
};

export default UseFetch;
