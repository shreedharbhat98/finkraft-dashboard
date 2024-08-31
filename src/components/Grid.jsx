import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { getColumnDefs } from "../utils/gridHelper.js";

const pagination = true;
const paginationPageSize = 500;
const paginationPageSizeSelector = [200, 500, 1000];

const Grid = ({ tableData, onRowSelected }) => {
  return (
    <div className="ag-theme-quartz" style={{ height: 700, width: '100%' }}>
      {tableData?.length ? (
        <AgGridReact
          rowData={tableData}
          columnDefs={getColumnDefs(tableData[0])}
          pagination={pagination}
          rowSelection="multiple"
          rowMultiSelectWithClick={true}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          onRowSelected={({ node }) => {
            onRowSelected?.(node.data, {
              selected: node.selected,
              rowIndex: node.rowIndex,
            });
          }}
        />
      ) : null}
    </div>
  );
};

export default Grid;
