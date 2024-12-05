import React from "react";

import {createPortal} from "react-dom";

function Card(props) {
    const{title, className, children}=props;

    return(
        // eslint-disable-next-line no-undef
        <div className={`card ${className}`}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;
