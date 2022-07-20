import { SexId } from "./Sex";

type Sex = {
    name: string
}

export const SexDetails: { [key in SexId]: Sex } = {
    [SexId.NOT_SELECTED]: {
        name: "Nevybráno"
    },
    [SexId.Male]: {
        name: "Muž",
    },
    [SexId.Female]: {
        name: "Žena"
    }
}
