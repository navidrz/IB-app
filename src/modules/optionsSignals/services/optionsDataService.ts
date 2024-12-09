import { loadDataFromCSV } from '../../../services';

export async function loadOptionsData() {
  return await loadDataFromCSV('/data.csv');
}
