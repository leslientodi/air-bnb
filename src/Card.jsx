import React from "react";

export function Card ({img, rating, country, title, price}) {
    return (
        <>
        <div className="card-images">
            <div>
                <img src={img}></img>
                <div className="rating">
                    <img src="../src/images/star.jpeg" width='10px' className="star"></img>
                    <small>{rating}</small>
                    <small className="grey"> (6) </small>
                    <small className="grey">    {country}</small>
                    <p>{title}</p>
                    <strong>{price}</strong>

                </div>

            </div>
            
            


        </div>
        
        

        
        </>
    )
}