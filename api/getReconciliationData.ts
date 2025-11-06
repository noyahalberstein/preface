import { ReconciliationData } from "@/types/reconciliation";
import { Statistics } from "@/types/statistics";
import axios from "axios";

export const getReconciliationData = async(): Promise<ReconciliationData[]> => (await axios.get('http://localhost:8000/reconcile')).data

export const getStatisticsnData = async(): Promise<Statistics> => (await axios.get('http://localhost:8000/statistics')).data
