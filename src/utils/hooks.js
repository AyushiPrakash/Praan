import { useState, useEffect } from "react";
import { readRemoteFile } from "react-papaparse";
import moment  from "moment";

export const useRemoteCsv = (url) => {
  const [data, setData] = useState({ loading: true, value: null });
  useEffect(() => {
    const result = [];
    readRemoteFile(url, {
      header: true,
      worker: true,
      download: true,
      dynamicTyping: true,
      step: (row) => {
        const rowData = row.data;
        rowData.t = moment(rowData.t, "YY/MM/DD,HH:mm:ss").unix();
        result.push(rowData);
      },
      complete: (_) => {
        setData({ loading: false, value: result });
      },
    });
  }, []);
  return data;
};
