import React, { useState, useEffect } from "react";
import Pm1 from "./graphs/Pm1";
import Pm25 from "./graphs/Pm25";
import Pm10 from "./graphs/Pm10";
import Wind from "./graphs/Wind";
import TimeSeriesGraph from "./graphs/TimeSeriesGraph";
import Select from "react-select";
import { Layout } from "./DashboardStyles";
import moment from "moment";
import { ReactComponent as Logo } from "../utils/logo.svg";
import { useTheme } from "styled-components";

//Select options for time-range
const timeOptions = [
  { value: "sixHour", label: "Last 6 hours" },
  { value: "twelveHour", label: "Last 12 hours" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "sevenDays", label: "Last 7 days" },
  { value: "fourteenDays", label: "Last 14 days" },
  { value: "thisMonth", label: "This Month" },
  { value: "lastMonth", label: "Last Month" },
];

//Device select options for time-series graph
const deviceOptions = [
  { value: "deviceA", label: "Device A" },
  { value: "deviceB", label: "Device B" },
  { value: "deviceC", label: "Device C" },
];

const Dashboard = ({ data }) => {
  const theme = useTheme();
  const [selectedDevice, setSelectedDevice] = useState(deviceOptions[0]);
  const [selectedTime, setSelectedTime] = useState(timeOptions[0]);
  const [assumedCurrentDate, setAssumedCurrentDate] = useState(moment());

  //Custom style for select
  const selectStyles = {
    control: (styles) => ({ ...styles, backgroundColor: theme.selectColor }),
    singleValue: (styles) => ({ ...styles, color: theme.textPrimary }),
  };

  //Find the latest date in the given data and assume it as the current date
  useEffect(() => {
    if (!data.deviceA.loading) {
      let max = data.deviceA.value[0].t;
      data.deviceA.value.forEach((row) => {
        if (row.t > max) {
          max = row.t;
        }
      });
      setAssumedCurrentDate(moment(max * 1000));
    }
  }, [data.deviceA]);

  //Filter the data according to a time-range
  const filterRow = (row) => {
    switch (selectedTime.value) {
      case "sixHour":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().subtract(6, "hours"),
          assumedCurrentDate.clone().endOf("day")
        );
      case "twelveHour":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().subtract(12, "hours"),
          assumedCurrentDate.clone().endOf("day")
        );
      case "today":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().startOf("day"),
          assumedCurrentDate.clone().endOf("day")
        );
      case "yesterday":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().subtract(1, "day").startOf("day"),
          assumedCurrentDate.clone().subtract(1, "day").endOf("day")
        );
      case "sevenDays":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().subtract(7, "days").startOf("day"),
          assumedCurrentDate.clone().endOf("day")
        );
      case "fourteenDays":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().subtract(14, "days").startOf("day"),
          assumedCurrentDate.clone().endOf("day")
        );
      case "thisMonth":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().startOf("month"),
          assumedCurrentDate.clone().endOf("month")
        );
      case "lastMonth":
        return moment(row.t * 1000).isBetween(
          assumedCurrentDate.clone().subtract(1, "month").startOf("month"),
          assumedCurrentDate.clone().subtract(1, "month").endOf("month")
        );
      default:
        return false;
    }
  };

  const filteredData = JSON.parse(JSON.stringify(data));
  if (!data.deviceA.loading && !data.deviceB.loading && !data.deviceC.loading) {
    filteredData.deviceA.value = filteredData.deviceA.value.filter((row) => {
      return filterRow(row);
    });

    filteredData.deviceB.value = filteredData.deviceB.value.filter((row) => {
      return filterRow(row);
    });

    filteredData.deviceC.value = filteredData.deviceC.value.filter((row) => {
      return filterRow(row);
    });
  }

  //HandleChange for time-series graph
  const handleChange = (e) => {
    setSelectedDevice(e);
  };

  //HandleChange for time range dropdown
  const handleTimeFilterChange = (e) => {
    setSelectedTime(e);
  };

  return (
    <Layout>
      <div className="header">
        <Logo className="logo" style={{ fill: theme.textPrimary }} />
        <div style={{ color: theme.textPrimary }}>
          {assumedCurrentDate.format("HH:mm:ss, Do MMM YYYY")}
        </div>
        <div className="timeSelect">
          <Select
            options={timeOptions}
            value={selectedTime}
            onChange={handleTimeFilterChange}
            styles={selectStyles}
          />
        </div>
      </div>
      <div className="pmContainer">
        <div className="card">
          <header>PM1</header>
          <Pm1 {...filteredData} />
        </div>
        <div className="card">
          <header>PM2.5</header>

          <Pm25 {...filteredData} />
        </div>
        <div className="card">
          <header>PM10</header>

          <Pm10 {...filteredData} />
        </div>
        <div className="card">
          <header>Wind Speed</header>
          <Wind {...filteredData} />
        </div>
      </div>
      <div className="timeSeriesContainer">
        <div className="timeSeriesSelect">
          <Select
            options={deviceOptions}
            onChange={handleChange}
            value={selectedDevice}
            styles={selectStyles}
          />
        </div>
        <header>Time-Series Graph</header>
        <TimeSeriesGraph data={filteredData[selectedDevice.value]} />
      </div>
    </Layout>
  );
};

export default Dashboard;
