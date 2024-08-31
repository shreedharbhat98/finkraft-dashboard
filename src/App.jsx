import { Fragment, useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import MemoizedChartExample from "./components/Chart";
import data from "./data/vendor-data.json";

function App() {
  const [selectedRows, setSelectedRow] = useState([]);
  const [tableData, _] = useState(data.data);

  const onRowSelected = (row, { selected, rowIndex }) => {
    setSelectedRow((previousSelectedRows) => {
      if (selected) {
        return [...previousSelectedRows, { ...row, index: rowIndex }];
      }
      return previousSelectedRows.filter(
        (selectedRow) => selectedRow.index !== rowIndex
      );
    });
  };

  return (
    <main>
      <h1 className="text-center">Vendor Performance Table </h1>
      <div className="container">
        {tableData.length && (
          <Fragment>
            <Grid tableData={tableData} onRowSelected={onRowSelected} />
            <MemoizedChartExample rows={selectedRows} />
          </Fragment>
        )}
      </div>
    </main>
  );
}

export default App;
