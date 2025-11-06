import { FileUpload } from "@/components/UploadFile";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box flexDirection={"row"} display={"flex"} gap={"30px"}>
      <FileUpload />
    </Box>
  );
};

export default Page;
