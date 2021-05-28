import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "styled-components";
import moment from "moment";

const TimeSeriesGraph = ({ data }) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" aspect={21 / 9}>
      <AreaChart
        data={data.value}
        margin={{
          top: 5,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorP1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e40017" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#e40017" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorP25" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#185ADB" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#185ADB" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorP10" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff7a00" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff7a00" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke={theme.gridColor}
          strokeDasharray="3 3"
          strokeWidth="0.5"
        />
        <XAxis
          dataKey={"t"}
          name="Time"
          type="number"
          domain={["auto", "auto"]}
          scale="time"
          style={{ fontSize: "10px" }}
          tickFormatter={(epoch) => moment(epoch * 1000).format("H:mm, MMM Do")}
        />

        <YAxis style={{ fontSize: "12px" }} />
        <Tooltip
          labelFormatter={(epoch) =>
            moment(epoch * 1000).format("H:mm, MMM Do, YY")
          }
        />
        <Legend align="center" verticalAlign="top" height={36} />
        <Area
          name="PM1"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="p1"
          stroke="#e40017"
          fill="url(#colorP1)"
          fillOpacity={0.8}
        />
        <Area
          name="PM2.5"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="p25"
          stroke="#185ADB"
          fill="url(#colorP25)"
          fillOpacity={0.8}
        />
        <Area
          name="PM10"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="p10"
          stroke="#ff7a00"
          fill="url(#colorP10)"
          fillOpacity={0.8}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesGraph;
