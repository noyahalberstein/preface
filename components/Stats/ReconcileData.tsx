import { ReconcileCountItem } from "@/types/statistics";
import { Box } from "@mui/material";
import { StatsCard } from "../StatsCard";

export const ReconcileData = ({ count }: { count: ReconcileCountItem[] }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap="20px"
      justifyContent={"center"}
    >
      {count.map((item) => (
        <StatsCard title={item.status} value={item.count} key={item.status} />
      ))}
    </Box>
  );
};
