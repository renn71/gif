import React, { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
    const [categories, setCategories] = useState("hi");
    const [limit, setLimit] = useState(10);

    return (
        <>
            <header>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="text-center mt-5">
                            <h1>
                                <b>Gif App 🎇</b>
                            </h1>
                        </div>
                        <hr />
                    </div>
                </div>
            </header>
            <div className="mb-5 mt-3">
                <div className="text-center ">
                    <AddCategories
                        setCategories={setCategories}
                        setLimit={setLimit}
                    />
                </div>
                <GifGrid category={categories} limit={limit} />;
                <div className="text-center">
                    <button
                        onClick={() => {
                            setLimit(limit + 10);
                        }}
                    >
                        MORE
                    </button>
                </div>
            </div>
            <footer className="row bg-dark text-center mt-5 h-100">
                <h4>Development by Naiar 📐</h4>
            </footer>
        </>
    );
};
