import { FileType } from "@/types/file";
import axios from "axios";

export const uploadFile = async (files: File[],type:FileType) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file)); 

  const response = await axios.post(`http://localhost:8000/upload/${type}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};