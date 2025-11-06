import { InvoicesPerClaimItem } from "@/types/statistics";
import { Box, Paper } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { StatsCard } from "../StatsCard";

const columns: GridColDef[] = [
  {
    field: "claim_id",
    headerName: "Claim ID",
    type: "number",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "count",
    headerName: "Count",
    type: "number",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export const InvoicesPerClaim = ({
  data,
}: {
  data: InvoicesPerClaimItem[];
}) => {
  const avg = data.reduce((prev, curr) => prev + curr.count, 0) / data.length;

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      justifyContent={"center"}
      gap={"30px"}
    >
      <Paper sx={{ height: 300, width: "70%" }}>
        <DataGrid
          rows={data || []}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 50, 100]}
          sx={{ border: 0 }}
          getRowId={(row) => row.claim_id}
        />
      </Paper>
      <StatsCard
        title="Avg invoices per claim"
        value={Number(avg.toFixed(4))}
      />
    </Box>
  );
};
