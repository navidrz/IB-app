import { fetchCSV, parseCSV } from './csvService';

export async function loadDataFromCSV<T = any>(url: string): Promise<T[]> {
  const csvText = await fetchCSV(url);
  const data = parseCSV<T>(csvText);
  return data;
}
