// تابع محاسبه میانگین امتیاز بر اساس سناریو
export function computeAverageScoresByScenario(data: any[]): { [scenario: string]: number } {
  const scenarioMap: {[key:string]: {sum:number; count:number}} = {};
  data.forEach(item => {
    const scenario = item.MarketScenario;
    const score = parseFloat(item.Score);
    if (!scenarioMap[scenario]) {
      scenarioMap[scenario] = {sum:0, count:0};
    }
    scenarioMap[scenario].sum += score;
    scenarioMap[scenario].count += 1;
  });

  const averages: { [scenario: string]: number } = {};
  for (const sc in scenarioMap) {
    averages[sc] = scenarioMap[sc].sum / scenarioMap[sc].count;
  }
  return averages;
}
