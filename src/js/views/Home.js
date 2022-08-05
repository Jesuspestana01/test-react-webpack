// Main view of our App, which can be accesed by typing on the url / path

import React from "react"
import Penguin from "../../img/GIFs/hi-penguin.gif"

export const Home = () => {
    return (
        <>
        <div className="position-absolute top-50 start-50 translate-middle">
            <h2 className="text-center">Hello!</h2>
            <h3>React Boilerplate with Bootstrap compile by Webpack.</h3>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x">
            <img src={Penguin}/>
        </div>
        </>
    )
}