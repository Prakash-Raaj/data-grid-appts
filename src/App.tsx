import React, { useState, useEffect } from "react";
import "./App.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import fetchData from "./utils/fetchApiData";
import DataTable from "./components/DataTable";

function App() {
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    const fetchApidata: any = async () => {
      const data: any = await fetchData();
      setDatas(data);
    };
    fetchApidata();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Question Table</h2>
      <DataTable datas={datas} />
    </div>
  );
}

export default App;
