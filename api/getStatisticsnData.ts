import { Statistics } from "@/types/statistics";
import axios from "axios";

export const getStatisticsnData = async(): Promise<Statistics> => (await axios.get('http://localhost:8000/statistics')).data
