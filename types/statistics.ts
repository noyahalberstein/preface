export type ReconcileCountItem = {
  status: string;
  count: number;
};

export type ClaimsPerYearItem = {
  year: number;
  count: number;
};

export type ClaimsPerPatientItem = {
  patient_id: number;
  name:string;
  count: number;
};

export type InvoicesPerClaimItem = {
  claim_id: number;
  count: number;
};

export type NumbersStats = {
  total_patients: number;
  total_claims: number;
  total_invoices: number;
};

export type Statistics = {
  reconcile_count: ReconcileCountItem[];
  claims_per_year: ClaimsPerYearItem[];
  claims_per_patient: ClaimsPerPatientItem[];
  numbers_stats: NumbersStats;
  invoices_per_claim: InvoicesPerClaimItem[];
};
