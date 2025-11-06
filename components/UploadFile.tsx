"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "@/api/uploadFile";
import { FileType } from "@/types/file";

export const FileUpload = ({ type }: { type: FileType }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ files, type }: { files: File[]; type: FileType }) =>
      uploadFile(files, type),
    onSuccess: () => {
      alert("Files uploaded successfully!");
      setFiles([]);
    },
    onError: (err: unknown) => {
      console.error(err);
      alert("Failed to upload files");
    },
  });

  const handleUpload = () => {
    if (files.length === 0) return;
    mutate({ files, type });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      maxWidth={600}
      mx="auto"
      height={"100%"}
    >
      <Paper
        {...getRootProps()}
        elevation={3}
        sx={{
          border: "2px dashed",
          borderColor: isDragActive ? "primary.main" : "grey.400",
          backgroundColor: isDragActive ? "grey.100" : "background.paper",
          padding: 4,
          textAlign: "center",
          cursor: "pointer",
          transition: "border-color 0.3s, background-color 0.3s",
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": { backgroundColor: "grey.50" },
        }}
      >
        <input {...getInputProps()} />
        <Typography
          variant="h6"
          color={isDragActive ? "primary" : "textSecondary"}
        >
          {isDragActive
            ? `Drop the ${type} file here...`
            : `Drag & drop ${type} file here, or click to select`}
        </Typography>
      </Paper>

      {files.length > 0 && (
        <Paper
          elevation={2}
          sx={{
            padding: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Selected file{files.length > 1 ? "s" : ""}:
          </Typography>
          <List>
            {files.map((file, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingY: 0.5,
                }}
              >
                <Typography variant="body1">
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </Typography>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => removeFile(index)}
                  sx={{ ml: 1 }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", width: "100%", color: "white" }}
            onClick={handleUpload}
            disabled={isPending}
          >
            {isPending ? "Uploading..." : "Upload"}
          </Button>
        </Paper>
      )}
    </Box>
  );
};
