import React from "react"
import { FaCloudArrowUp } from "react-icons/fa6";

export default function Cards({ icon, color  }) {

    const styles = {backgroundColor:`${color}`}

    return (
        <>
            <div className="card-icon-container" style={styles}>
                {icon ? icon : <FaCloudArrowUp />}
            </div>
            <div className="card-container">
                <h3>Easy Deployment</h3>
                <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
        </>
    )
}

