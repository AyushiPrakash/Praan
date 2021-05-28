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
  ReferenceLine,
} from "recharts";
import { useTheme } from "styled-components";
import moment from "moment";

const Wind = ({ deviceA, deviceB, deviceC }) => {
  const theme = useTheme();

  // Forming a custom data array containing pm1 values of deviceA, deviceB, and deviceC with common timestamps
  const data = [];
  let maxWindSpeedA = { x: 0, y: 0 };
  let maxWindSpeedB = { x: 0, y: 0 };
  let maxWindSpeedC = { x: 0, y: 0 };
  if (!deviceA.loading && !deviceB.loading && !deviceC.loading) {
    deviceA.value.forEach((readingA, index) => {
      data.push({
        t: readingA.t,
        deviceA: readingA.w,
        deviceB: deviceB.value[index].w,
        deviceC: deviceC.value[index].w,
      });
      if (readingA.w > maxWindSpeedA.y) {
        maxWindSpeedA.y = readingA.w;
        maxWindSpeedA.x = readingA.t;
      }
      if (deviceB.value[index].w > maxWindSpeedB.y) {
        maxWindSpeedB.y = deviceB.value[index].w;
        maxWindSpeedB.x = readingA.t;
      }
      if (deviceC.value[index].w > maxWindSpeedC.y) {
        maxWindSpeedC.y = deviceC.value[index].w;
        maxWindSpeedC.x = readingA.t;
      }
    });
  }

  return (
    <ResponsiveContainer width="100%" aspect={16 / 9}>
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
          domain={["dataMin", "dataMax"]}
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
        <Legend align="right" verticalAlign="top" height={36} />
        <Line
          name="A"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="deviceA"
          stroke="#f7ea00"
        />
        <ReferenceLine
          y={maxWindSpeedA.y}
          label={{ value: "Max speed at A", fill: theme.textPrimary }}
          stroke="#f7ea00dd"
          strokeDasharray="3 3"
        />
        <Line
          name="B"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="deviceB"
          stroke="#29bb89"
        />
        <ReferenceLine
          y={maxWindSpeedB.y}
          label={{ value: "Max speed at B", fill: theme.textPrimary }}
          stroke="#29bb89"
          strokeDasharray="3 3"
        />
        <Line
          name="C"
          strokeWidth="1.5px"
          dot={false}
          type="monotone"
          dataKey="deviceC"
          stroke="#ce1f6a"
        />
        <ReferenceLine
          y={maxWindSpeedC.y}
          label={{ value: "Max speed at C", fill: theme.textPrimary }}
          stroke="#ce1f6a"
          strokeDasharray="3 3"
        />

        <ReferenceLine
          x={maxWindSpeedA.x}
          stroke={theme.textPrimary}
          strokeDasharray="3 3"
        />
        <ReferenceLine
          x={maxWindSpeedB.x}
          stroke={theme.textPrimary}
          strokeDasharray="3 3"
        />
        <ReferenceLine
          x={maxWindSpeedC.x}
          stroke={theme.textPrimary}
          strokeDasharray="3 3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Wind;
