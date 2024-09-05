import React from "react";
function Clock(props){
    return(
        <div>
            <div className='clock'>Clock Test</div>
            <div className='clock2'>{new Date().toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;