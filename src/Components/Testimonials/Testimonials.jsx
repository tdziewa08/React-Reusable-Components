import React from "react"
import { ImQuotesLeft } from "react-icons/im"

export default function Testimonials({ img, name, company, title, text }) {
    return (
        <div className="block">
            <div className="img-container">
                <img src={img}/>
            </div>
            <div className="testimonial-container">
                <section className="testimonial-text">
                    <ImQuotesLeft />
                    <p>{text}</p>
                    <h4>{name}</h4>
                    <h5>{company}, {title}</h5>
                </section>
            </div>
        </div>
    )
}