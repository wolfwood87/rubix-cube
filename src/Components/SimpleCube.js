import React, {useState} from "react";
import Cell from "./Cell";

function SimpleCube() {
    const [cube, setCube] = useState(["red", "red", "red", "yellow", "yellow", "yellow", "blue", "blue", "blue"])
    const cubeContainer = {
        border: "1px solid black",
        display: "grid",
        width: "15.25%",
        margin: "auto",
        gridTemplateColumns: "repeat(3, 100px)",
        gridTemplateRows: "repeat(3, 100px)",
        padding: ".5%",
        height: "293px"
    }
    return (
        <div style={cubeContainer}>
            {cube.map((color, i) => (
                <>
                    <Cell color={color} key={i} />
                </>
            ))}
        </div>
    )
}

export default SimpleCube;