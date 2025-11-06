import { ReconciliationData } from "@/types/reconciliation";

export const mockReconciliationData: ReconciliationData[] = [
  {
    claim_id: 1001,
    patient_id: 501,
    date_of_service: "2025-10-10",
    charges_amount: 1200,
    name: "John Doe",
    total_invoiced: 1150,
    difference: 50,
    status: "Underpaid",
  },
  {
    claim_id: 1002,
    patient_id: 502,
    date_of_service: "2025-10-15",
    charges_amount: 800,
    name: "Jane Smith",
    total_invoiced: 800,
    difference: 0,
    status: "Balanced",
  },
  {
    claim_id: 1003,
    patient_id: 503,
    date_of_service: "2025-09-28",
    charges_amount: 950,
    name: "Carlos Rivera",
    total_invoiced: 1000,
    difference: -50,
    status: "Overpaid",
  },
  {
    claim_id: 1004,
    patient_id: 504,
    date_of_service: "2025-09-01",
    charges_amount: 400,
    name: "Emily Zhang",
    total_invoiced: 350,
    difference: 50,
    status: "Underpaid",
  },
];
