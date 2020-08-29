import React from "react"
import "./Item.css"

function Item(props) {
    const bg = props.class_id.color
    return ( 
        <div className="item">
            <div style={{ background:bg }}>{props.class_id.name}</div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Item