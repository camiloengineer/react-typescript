import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: any) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {


        getGifs(category)
            .then( (imgs: any ) => {
                setState({
                    data: imgs,
                    loading: false
                });

            });
    }, [category])

    return state; // { data: [], loading: true };
}
