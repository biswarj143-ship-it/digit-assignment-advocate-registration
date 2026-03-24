import { useEffect, useState } from "react";
import { fetchMDMSData } from "../services/api";

export const useMDMS = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const load = async () => {
      const res = await fetchMDMSData();
      setData(res);
    };
    load();
  }, []);

  return data;
};