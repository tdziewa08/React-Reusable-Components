import React from "react"

export default function Banners({ children, status}) {

    let backgrou

    return (
        <div className={`banner ${status}`}>
            <div className="icon-container">
                <img src={`../../../public/${status}.png`}/>
            </div>
            <section className="banner-text">
                {children}
            </section>
        </div>
    )
}