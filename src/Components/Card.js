import React from 'react'
import Data from "./Data"
const Card = (props) => {
    console.log(props)
    return (
        <>
          
                <div className="card">
                    <img src={props.img} alt="my pic" className="card__img" />
                    <div className="card__info">
                        <span className="card__genre">{props.genre}</span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
        
        </>
    )
}
export default Card;