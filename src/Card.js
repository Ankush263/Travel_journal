import React from "react"
import ReactDOM from "react-dom"


export default function card(props) {
    

    return (
        <div className="content">
            <img className="img" src={`./images/${props.img}`} />
            <div className="text">
                <p className="country">{props.country}
                    <span>View on Google Maps</span>
                </p>
                <h1>{props.place}</h1>
                <small>{props.time}</small>
                <p>{props.description}</p>
            </div>
        </div>
    )
}