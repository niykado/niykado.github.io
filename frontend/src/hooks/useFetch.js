import axiosInstance from "./axiosInstance";
import { useEffect, useState } from "react";

const fetchData = async (url, setData, setLoading, setError) => {
  setLoading(true);
  try {
    const res = await axiosInstance.get(url);
    setData(res.data);
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url, setData, setLoading, setError);
  }, [url]); 

  const reFetch = async () => {
    fetchData(url, setData, setLoading, setError);
  };

  return { data, error, loading, reFetch };
};

export default useFetch;
