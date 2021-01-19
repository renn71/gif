import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
export const GifGrid = ({ category, limit }) => {
    
    const { data, loading } = useFetchGif(category, limit);
    return (
        <>
            <div className="text-center mt-4">
                <h3>{category}</h3>
            </div>
            {loading && <p>Loading</p>}
            <div className="row">
                <div className="col-8 offset-2 mt-5">
                    <div className="card-container text-center">
                        {data.map((item) => {
                            return <GifItem key={item.id} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
