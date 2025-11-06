import { FileUpload } from "@/components/UploadFile";
import { Box, Divider, Typography } from "@mui/material";

const Page = () => {
  return (
    <Box flexDirection={"row"} display={"flex"} gap={"20px"}>
      <Box
        flexDirection={"column"}
        display={"flex"}
        gap={"20px"}
        width={"100%"}
      >
        <Typography fontWeight={600} alignSelf={"center"} fontSize={32}>
          Claims
        </Typography>
        <FileUpload type="claim" />
      </Box>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Box
        flexDirection={"column"}
        display={"flex"}
        gap={"20px"}
        width={"100%"}
      >
        <Typography fontWeight={600} alignSelf={"center"} fontSize={32}>
          Invoices
        </Typography>
        <FileUpload type="invoice" />
      </Box>
    </Box>
  );
};

export default Page;
