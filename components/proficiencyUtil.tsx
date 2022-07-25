export const CalculateProficiency = (charLevel: number): number => {
  switch (true) {
    case charLevel <= 4:
      return 2;
    case charLevel <= 8:
      return 3;
    case charLevel <= 12:
      return 4;
    case charLevel <= 16:
      return 5;
    case charLevel <= 20:
      return 6;
    default:
      return 0;
  }
};
