import React from "react";


export default function Item(props){
    console.log("item update")
    // const removeItem = props.removeItem

    return(
        <li className="my-2 full-width p-3 border d-flex flex-row align-items-center justify-content-between">
            <div className="align-self-center mb-2">{props.item}</div>
            <i id={props.id} onClick={props.removeItem} className="fa fa-remove btn btn-sm btn-outline-danger align-self-center" aria-hidden="true"></i>
        </li>
        
    )
}