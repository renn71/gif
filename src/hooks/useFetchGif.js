import { getGif } from "../helpers/GetGif";
import { useState, useEffect } from "react";

export const useFetchGif = (category, limit) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGif(category,limit).then((imgs) => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category,limit]);
    return state;
};
