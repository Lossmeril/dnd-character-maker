export const CalculateHitDieAverage = (hitDie: number): number => {
  switch (hitDie) {
    case 6:
      return 4;
    case 8:
      return 5;
    case 10:
      return 6;
    case 12:
      return 7;
    default:
      return 4;
  }
};

export const CalcultateLevelHitPoint = (
  hitDie: number,
  level: number
): number => {
  switch (level) {
    case 1:
      return hitDie;
    default:
      return CalculateHitDieAverage(hitDie);
  }
};

export const CalculateHp = (
  levelTable: [string, number[], number][],
  constitution: number
): number => {
  var total = 0;

  for (var i = 0; i < levelTable.length; i++) {
    for (var j = 0; j < levelTable[i][1].length; j++) {
      total +=
        CalcultateLevelHitPoint(levelTable[i][2], levelTable[i][1][j]) +
        constitution;

      console.log();
    }
  }

  return total;
};
