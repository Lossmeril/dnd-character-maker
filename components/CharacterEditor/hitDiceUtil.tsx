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

export const CalculateHpForClass = (
  hitDie: number,
  level: number,
  constitution: number
): number => {
  var total = 0;

  for (var i = 1; i <= level; i++) {
    total += CalcultateLevelHitPoint(hitDie, i) + constitution;
  }

  return total;
};
