import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ setCategories, setLimit }) => {
    const [value, setValue] = useState("");

    const handleValue = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(value);
        setLimit(10);
        setValue("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleValue} placeholder="🔎"/>
            </form>
        </>
    );
};

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
