const getColumnDefs = (dataObject) => {
  const columnDefs = [];
  const keys = Object.keys(dataObject);
  keys.forEach((key) => {
    columnDefs.push({ headerName: key, field: key, filter: true });
  });
  return columnDefs;
};

export { getColumnDefs };
