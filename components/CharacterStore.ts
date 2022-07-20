import { Character } from "./Character";
import usePersistentState from "./PersistentPane";

type CharacterStore = {
    [key: string]: Character
}

const useCharacterStore = (): [CharacterStore, (newStore: CharacterStore) => void] => {
    const [characterStore, setCharacterStore] = usePersistentState("character-store", {} as CharacterStore)
    return [characterStore, setCharacterStore]
}

export default useCharacterStore
