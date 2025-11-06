"use client";
import { getStatisticsnData } from "@/api/getStatisticsnData";
import { Box, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TotalNumbers } from "./Stats/TotalNumbers";
import { ClaimsPerPatient } from "./Stats/ClaimsPerPatient";
import { InvoicesPerClaim } from "./Stats/InvoicesPerClaim";
import { ReconcileData } from "./Stats/ReconcileData";

export const Statistices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatisticsnData,
    retry: 2,
  });

  if (!data) {
    return (
      <Box>
        <Typography fontSize={36}>No data available</Typography>
      </Box>
    );
  }

  return isLoading ? (
    <Skeleton variant="rounded" width={"100%"} height={600} />
  ) : (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <TotalNumbers {...data.numbers_stats} />
      <ClaimsPerPatient data={data.claims_per_patient} />
      <InvoicesPerClaim data={data.invoices_per_claim} />
      <ReconcileData count={data.reconcile_count} />
    </Box>
  );
};
