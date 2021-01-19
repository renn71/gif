import React from "react";

export const GifItem = ({ item }) => {
    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(item.url);
    };

    return (
        <div className="card animate__animated animate__bounce">
            <img onClick={copyToClipboard   } src={item.url} alt="" />
        </div>
    );
};
