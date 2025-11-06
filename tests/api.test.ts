import axios from "axios";
import { getReconciliationData } from "@/api/getReconciliationData";
import { mockReconciliationData } from "./mockData";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getReconciliationData", () => {
  
    it("should fetch reconciliation data successfully", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockReconciliationData });
    const result = await getReconciliationData();

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:8000/reconcile");
    expect(result).toEqual(mockReconciliationData);
  });

  it("should throw an error if axios fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    await expect(getReconciliationData()).rejects.toThrow("Network Error");
  });
});
