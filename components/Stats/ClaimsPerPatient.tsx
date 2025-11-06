import { ClaimsPerPatientItem } from "@/types/statistics";
import { Box, Paper } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { StatsCard } from "../StatsCard";

const COLUMN_WIDTH = 200;

const columns: GridColDef[] = [
  {
    field: "patient_id",
    headerName: "Patient ID",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "name",
    headerName: "Patient Name",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "count",
    headerName: "Count",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export const ClaimsPerPatient = ({
  data,
}: {
  data: ClaimsPerPatientItem[];
}) => {
  const avg = data.reduce((prev, curr) => prev + curr.count, 0) / data.length;

  return (
    <Box display="flex" flexDirection={"row"} justifyContent={"space-between"}>
      <Paper sx={{ height: 300, width: 600 }}>
        <DataGrid
          rows={data || []}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 50, 100]}
          sx={{ border: 0 }}
          getRowId={(row) => row.patient_id}
        />
      </Paper>
      <StatsCard title="Avg claims per patient" value={avg} />
    </Box>
  );
};
