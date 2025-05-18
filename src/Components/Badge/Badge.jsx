import React from "react"
import LittleBadge from "./LittleBadge.jsx"

export default function Badge() {
    return (
        <div className="badge-row">
            <LittleBadge base="green" shape="pill"/>
            <LittleBadge base="red" shape="square"/>
            <LittleBadge base="purple" shape="square"/>
            <LittleBadge base="yellow" shape="pill"/>
            <LittleBadge base="blue" shape="pill"/>
            <LittleBadge base="grey" shape="square"/>
            <LittleBadge base="green" shape="pill"/>
            <LittleBadge base="green" shape="pill"/>
            <LittleBadge base="green" shape="square"/>
        </div>
    )
}