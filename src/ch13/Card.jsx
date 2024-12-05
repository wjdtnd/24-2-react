import React from "react";

import {createPortal} from "react-dom";

function Card(props) {
    const{title, backgroundColor, children}=props;

    return(
        <div
            style={{
                margin : 8,
                padding : 8,
                borderRedius : 8,
                boxShadow : "0px 0px 4px 4px grey",
                backgroundColor : backgroundColor|| "red"
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;