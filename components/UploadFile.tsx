"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  Paper,
  IconButton,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";

export const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      maxWidth={600}
      mx="auto"
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
          height: 200,
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
            ? "Drop the claim file here..."
            : "Drag & drop a claim file here, or click to select"}
        </Typography>
      </Paper>

      {files.length > 0 && (
        <Paper elevation={2} sx={{ padding: 2 }}>
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
        </Paper>
      )}
    </Box>
  );
};
