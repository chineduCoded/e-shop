import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Rate = ({ value, text, color }) => {
    return (
        <div>
            {[1,2,3,4,5].map((star) => (
                <span key={uuidv4()}> 
                <i style={{color}} className={
                    value + 1 === star + 0.5 ? "fas fa-star-half-alt": value >= star 
                    ? "fas fa-star"
                    :"far fa-star"
                }></i>  
                </span>
            ))}
            <span style={{
                marginLeft: "5px"
            }}>{text && text}</span>
        </div>
    )
}

Rate.defaultProps = {
    color: "#ffa41c",
}
