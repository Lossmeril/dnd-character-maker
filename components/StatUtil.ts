export const CalculateStatModifier = (statLevel: number): number => {
    switch(statLevel) {
        case 1: return -5;
        case 2: return -4;
        case 3: return -4;
        case 4: return -3;
        case 5: return -3;
        case 6: return -2;
        case 7: return -2;
        case 8: return -1;
        case 9: return -1;
        case 10: return 0;
        case 11: return 0;
        case 12: return 1;
        case 13: return 1;
        case 14: return 2;
        case 15: return 2;
        case 16: return 3;
        case 17: return 3;
        case 18: return 4;
        case 19: return 4;
        case 20: return 5;
        case 21: return 5;
        case 22: return 6;
        case 23: return 6;
        case 24: return 7;
        case 25: return 7;
        case 26: return 8;
        case 27: return 8;
        case 28: return 9;
        case 29: return 9;
        case 30: return 10;
        default: return 0;
    }
}

export const GetStatPointCost = (points: number): number => {
    if(points >= 8 && points <= 13) return points - 8;
    if(points == 14) return 7;
    if(points == 15) return 9;
    throw new Error("invalid distributable points")
}
