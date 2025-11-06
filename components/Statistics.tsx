"use client";
import { getStatisticsnData } from "@/api/getReconciliationData";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TotalNumbers } from "./Stats/TotalNumbers";
import { ClaimsPerPatient } from "./Stats/ClaimsPerPatient";

export const Statistices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatisticsnData,
    retry: 2,
  });

  return !data || isLoading ? (
    "loading.............."
  ) : (
    <Box>
      <TotalNumbers {...data?.numbers_stats} />
      <ClaimsPerPatient data={data.claims_per_patient} />
      {JSON.stringify(data)}
    </Box>
  );
};
