import React, {useState} from "react";


function Cell(props) {
    const cube = {
        backgroundColor: `${props.color}`,
        height: "90px",
        width: "90px",
        border: "1px solid black",
    }
    return (
        <div style={cube}>
            {props.color}
        </div>
    )
}

export default Cell;