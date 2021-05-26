import { useState } from "react";
import { readRemoteFile } from "react-papaparse";

export const useRemoteCsv = (url) => {
  const [data, setData] = useState({ loading: true, value: null });
  readRemoteFile(url, {
    header: true,
    complete: (result) => {
      setData({ loading: false, value: result.data });
    },
  });
  return data;
};
