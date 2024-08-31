import { memo, useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

const getData = ({ rows }) => {
  const rowData = rows?.map((row) => {
    return {
      year: row["Year"],
      vendorScore: row["Vendor Score"],
      "3BValue": row["3B Value"],
      R1Value: row["R1 Value"],
      avgDays: row["Avg Days"],
      change: row["Change"],
    };
  });
  return rowData;
};

const getSerieData = () => {
  return [
    {
      type: "bar",
      xKey: "year",
      yKey: "vendorScore",
      yName: "vendorScore",
    },
    {
      type: "bar",
      xKey: "year",
      yKey: "3BValue",
      yName: "3BValue",
    },
    {
      type: "bar",
      xKey: "year",
      yKey: "R1Value",
      yName: "R1Value",
    },
    {
      type: "bar",
      xKey: "year",
      yKey: "avgDays",
      yName: "avgDays",
    },
    {
      type: "bar",
      xKey: "year",
      yKey: "change",
      yName: "change",
    },
  ];
};

const Chart = (rows) => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    const row = rows?.rows[0] || {};
    setOptions({
      title: {
        text: row?.["Vendor Name"],
      },
      subtitle: {
        text: "Vendor Performance",
      },
      data: getData(rows),
      series: getSerieData(rows),
    });
  }, [rows]);
  return <AgCharts options={options} />;
};

const MemoizedChartExample = memo(Chart);
export default MemoizedChartExample;
