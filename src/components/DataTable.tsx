import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DataTable = ({ datas }: any) => {
  const columns: GridColDef[] = [
    { field: "question", headerName: "Question", width: 1200 },
  ];

  interface RowSettings {
    id: String;
    title: String;
  }

  const rows: RowSettings[] = datas.map((data: any) => {
    return {
      id: data.question_id,
      question: data.title,
    };
  });

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          columns={columns}
          rows={rows}
          autoHeight
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
};

export default DataTable;
