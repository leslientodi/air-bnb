import React from "react";

export function Card (props) {
    return (
        <>
        <div className="card-images">
            <img src="../src/images/swimmer.jpeg"></img>
            


        </div>
        <div className="rating">
            <img src="../src/images/star.jpeg" width='10px' className="star"></img>
            <small>5.0</small>
            <small className="grey"> (6) </small>
            <small className="grey">    USA</small>
            <p>{props.title}</p>
            <strong>{props.price}</strong>

        </div>
        

        
        </>
    )
}