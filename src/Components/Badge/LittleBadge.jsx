import React from "react"

export default function LittleBadge({ base, shape }) {

    let styles

    if(base === "red")
    {
        styles = {
            backgroundColor:"#FEE2E2",
            color:"#991B1B"
        }
    }
    else if(base === "yellow")
    {
        styles = {
            backgroundColor:"#FEF3C7",
            color:"#92400E"
        }
    }
    else if(base === "blue")
    {
        styles = {
            backgroundColor:"#DBEAFE",
            color:"#1E40AF"
        }
    }
    else if(base === "green")
    {
        styles = {
            backgroundColor:"#D1FAE5",
            color:"#065F46"
        }
    }
    else if(base === "purple")
    {
        styles = {
            backgroundColor:"#EDE9FE",
            color:"#5B21B6"
        }
    }
    else if(base === "grey" || base === "gray")
    {
        styles = {
            backgroundColor:"#F3F4F6",
            color:"#1F2937"
        }
    }

    return (
        <div className={`badge ${shape}`} style={styles}>
                Badge
        </div>
    )
}