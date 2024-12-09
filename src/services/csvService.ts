import Papa from 'papaparse';

export async function fetchCSV(url: string): Promise<string> {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Fetching CSV failed with status ${response.status}`);
  }
  return await response.text();
}

export function parseCSV<T = any>(csvText: string): T[] {
  const result = Papa.parse<T>(csvText, { header: true });
  return result.data;
}
