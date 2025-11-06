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

  if (!data && !isLoading) {
    return (
      <Box>
        <Typography fontSize={36}>No data available</Typography>
      </Box>
    );
  }

  return data && !isLoading ? (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <TotalNumbers {...data.numbers_stats} />
      <Typography fontWeight={600} fontSize={32} alignSelf={"center"}>
        Claims per patient
      </Typography>
      <ClaimsPerPatient data={data.claims_per_patient} />
      <Typography fontWeight={600} fontSize={32} alignSelf={"center"}>
        Invoices per claim
      </Typography>
      <InvoicesPerClaim data={data.invoices_per_claim} />
      <Typography fontWeight={600} fontSize={32} alignSelf={"center"}>
        Reconciliation stats
      </Typography>
      <ReconcileData count={data.reconcile_count} />
    </Box>
  ) : (
    <DashboardSkeleton />
  );
};

const DashboardSkeleton = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Box
        display="flex"
        flexDirection="row"
        gap="20px"
        justifyContent={"center"}
      >
        <Skeleton variant="rounded" width={250} height={175} />
        <Skeleton variant="rounded" width={250} height={175} />
        <Skeleton variant="rounded" width={250} height={175} />
      </Box>

      <Skeleton variant="rounded" width={"100%"} height={300} />
      <Skeleton variant="rounded" width={"100%"} height={300} />
    </Box>
  );
};
