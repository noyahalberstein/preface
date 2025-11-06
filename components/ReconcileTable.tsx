"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { getReconciliationData } from "@/api/getReconciliationData";
import { Box, Skeleton } from "@mui/material";

const COLUMN_WIDTH = 176;

const columns: GridColDef[] = [
  {
    field: "claim_id",
    headerName: "Claim ID",
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
    field: "patient_id",
    headerName: "Patient ID",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "date_of_service",
    headerName: "Date of service",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "charges_amount",
    headerName: "Charges amount",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "total_invoiced",
    headerName: "Total Invoiced",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "difference",
    headerName: "Difference",
    type: "number",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
  {
    field: "status",
    headerName: "Status",
    align: "center",
    headerAlign: "center",
    width: COLUMN_WIDTH,
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export const ReconcileTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["reconcile"],
    queryFn: getReconciliationData,
    retry: 2,
  });

  return isLoading ? (
    <Skeleton variant="rounded" width={"100%"} height={600} />
  ) : (
    <Box bgcolor={"#f1f1f7"} padding={"20px"}>
      <Paper sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data || []}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 50, 100]}
          sx={{ border: 0 }}
          getRowId={(row) => row.claim_id}
        />
      </Paper>
    </Box>
  );
};
