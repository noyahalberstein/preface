import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

export const StatsCard = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <Card sx={{ minWidth: 250, minHeight: 75 }}>
      <Box
        display="flex"
        flexDirection="column"
        height={"100%"}
        padding={"20px"}
      >
        <Typography alignSelf="center" fontSize="24px">
          {title}
        </Typography>
        <Divider />
        <Typography
          alignSelf="center"
          fontSize="36px"
          marginTop="10px"
          height={"100%"}
        >
          {value}
        </Typography>
      </Box>
    </Card>
  );
};
