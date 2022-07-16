import { useEffect, useState } from "react";

const canUseLocalStorage = () => typeof window !== 'undefined' && 'localStorage' in window

const usePersistentState = <T>(selector: string, value: T): [T, (newValue: T) => void] => {
    const [state, setState] = useState(value)

    useEffect(() => {
        if(canUseLocalStorage()) {
            const persistedValue = localStorage.getItem(selector)
            if(persistedValue != null) {
                setState(JSON.parse(persistedValue))
            }
        }
    }, [])

    const setter = (v: T) => {
        if(canUseLocalStorage()) {
            localStorage.setItem(selector, JSON.stringify(v))
        }
        setState(v)
    }

    return [state, setter]
}

export default usePersistentState
