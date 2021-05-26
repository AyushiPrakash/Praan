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

const Pm1 = ({ deviceA, deviceB, deviceC }) => {
  const data = [];
  if (!deviceA.loading && !deviceB.loading && !deviceC.loading) {
    deviceA.value.forEach((readingA, index) => {
      data.push({
        t: readingA.t,
        a: readingA.pm1,
        b: deviceB.value[index].pm1,
        c: deviceC.value[index].pm1,
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="t" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="a"
          stroke="#8884d8"
          //   activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="b" stroke="#82ca9d" />
        <Line type="monotone" dataKey="c" stroke="#f13a9d" />
      </LineChart>
    </>
  );
};

export default Pm1;
