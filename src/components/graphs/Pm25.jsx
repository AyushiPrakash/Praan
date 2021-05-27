import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Pm25 = ({ deviceA, deviceB, deviceC }) => {
  const data = [];
  if (!deviceA.loading && !deviceB.loading && !deviceC.loading) {
    deviceA.value.forEach((readingA, index) => {
      data.push({
        t: readingA.t,
        a: readingA.p25,
        b: deviceB.value[index].p25,
        c: deviceC.value[index].p25,
      });
    });
  }
  return (
    <>
      <LineChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeWidth="0.2" />
        <XAxis
          dataKey="t"
          name="Time"
          type="number"
          domain={["auto", "auto"]}
          scale="time"
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="a"
          stroke="#8884d8"
        />
        <Line
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="b"
          stroke="#04bbd3"
        />
        <Line
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="c"
          stroke="#f13a9d"
        />
      </LineChart>
    </>
  );
};

export default Pm25;
