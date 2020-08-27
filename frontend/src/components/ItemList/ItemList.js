import React, { useState, useEffect } from "react"
import Item from "../Item"
import axios from "axios"

function ItemList(props) {
    const [items, setItems ] = useState([]) 

    useEffect(() => {
        axios.get("http://localhost:8000/api/item")
        .then(({ data }) => {
            setItems(data)
        })
        .catch(e => {
            console.error(e)
        })
    })

    return (
        <div>
            {
                items.map(item => (
                    <Item key={item._id} {...item}/>
                )) 
            }
        </div>
    )
}

export default ItemList