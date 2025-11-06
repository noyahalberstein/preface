import { NumbersStats } from "@/types/statistics";
import { Box } from "@mui/material";
import { StatsCard } from "../StatsCard";

export const TotalNumbers = ({
  total_claims,
  total_invoices,
  total_patients,
}: NumbersStats) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap="20px"
      justifyContent={"center"}
    >
      <StatsCard title="Total Patients" value={total_patients} />
      <StatsCard title="Total Claims" value={total_claims} />
      <StatsCard title="Total Invoices" value={total_invoices} />
    </Box>
  );
};
