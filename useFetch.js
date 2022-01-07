import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
 
    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect( () => {
        //funcion cuando se desmonte
        return () => {
            isMounted.current = false;
        }
    }, []);

    /* useEffect(() => {
        setState({...state, loading: false})
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            })

    }, [url]);  */


    useEffect(() => {

        const getData = async() => {
            setState({...state, loading: true})
            
            try {
                const resp = await fetch(url);
                const data = await resp.json();
    
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                } else {
                    console.log('se state no se llamó')
                } 
            } catch(e) {
                setState({data: null, loading: false, error: 'error al cargar la info'})
            }
               

        }

        getData();

    }, [url]);

    return state;
}
