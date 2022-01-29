import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import "./index.css"
import data from "./data"
import Card from "./Card"


export default function App() {
    
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="main">
            <Header />
            {cards}
        </div>
    )
}