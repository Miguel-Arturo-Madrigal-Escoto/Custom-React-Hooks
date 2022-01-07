import { useEffect, useState } from 'react';

export const useForm = ( initialState = { } ) => {
    const [values, setValues] = useState(initialState);

    /* useEffect(() => {
        console.log('efecto')
    }, [initialState]); */

    const reset = () => {
        setValues('')
    }

    const handleReset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit del form');
    } */
    
    return [values, handleInputChange, handleReset];
}