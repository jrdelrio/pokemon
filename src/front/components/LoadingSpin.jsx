import React from "react";

const Spin = () => {

    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary text-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
};

export default Spin;