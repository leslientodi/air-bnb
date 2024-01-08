import React from "react";

export function Card ({img, rating, country, title, price,openSpots}) {
    return (
        <>
        <div className="card-images">
                
            <div>
                {openSpots=== 0 && <div className="card-badge">SOLD OUT</div>}
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