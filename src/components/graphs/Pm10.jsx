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
  Label,
} from "recharts";
import { useTheme } from "styled-components";
import moment from "moment";


const Pm10 = ({ deviceA, deviceB, deviceC }) => {
  const theme = useTheme();
  
  // Forming a custom data array containing pm10 values of deviceA, deviceB, and deviceC with common timestamps
  const data = [];
  if (!deviceA.loading && !deviceB.loading && !deviceC.loading) {
    deviceA.value.forEach((readingA, index) => {
      data.push({
        t: readingA.t,
        "deviceA": readingA.p10,
        "deviceB": deviceB.value[index].p10,
        "deviceC": deviceC.value[index].p10,
      });
    });
  }
  return (
    <ResponsiveContainer width="100%" aspect={1.33}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid
          stroke={theme.gridColor}
          strokeDasharray="3 3"
          strokeWidth="0.5"
        />
        <XAxis
          dataKey="t"
          name="Time"
          type="number"
          domain={["auto", "auto"]}
          scale="time"
          style={{ fontSize: "10px" }}
          tickFormatter={(epoch) => moment(epoch * 1000).format("H:mm, MMM Do")}
        />
        <YAxis style={{ fontSize: "12px" }} />
        <Tooltip labelFormatter={(epoch)=>(moment(epoch * 1000).format("H:mm, MMM Do, YY"))} />
        <Legend align="right" verticalAlign="top" height={36} />
        <Line
          name="A"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="deviceA"
          stroke="#8884d8"
        />
        <Line
          name="B"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="deviceB"
          stroke="#04bbd3"
        />
        <Line
          name="C"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="deviceC"
          stroke="#f13a9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Pm10;
