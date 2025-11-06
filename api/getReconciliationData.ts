import { ReconciliationData } from "@/types/reconciliation";
import axios from "axios";

export const getReconciliationData = async(): Promise<ReconciliationData[]> => (await axios.get('http://localhost:8000/reconcile')).data