import { useCallback, useMemo, useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    const [counter, setCounter] = useState( initialState );


    const handleIncrement = () => {
        setCounter(c => c + 1)
    }

    const handleDecrement = () => { 
        setCounter(c => c - 1)
    }

    const handleReset = () => {
        setCounter(initialState)
    }
   
    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    };

}