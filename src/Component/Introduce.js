import React from "react";
import Photo from "../img/Photo_port.jpg"
import GitHub_img from "../img/GitHub.svg"
import LinkedIn_img from "../img/LinkedIn.svg"
import Instagram_img from "../img/Instagram.svg"


export function Introduce() {
    return (
        <div className="Introduce">
            <div className="Introduce_text">
                <p className="Hi_text">Hey! I'm Vitalii</p>
                    <p>
                        Junior Front-End engineer with commercial experience in 1 year. I primarily 
                        focus on writing clean, elegant, and efficient code. I am proficient in HTML, CSS, 
                        JavaScript (React, Redux)                   
                    </p>
                    <p>
                        <a href="https://www.instagram.com/vetal_umnsk/" target="_blank"><img src={Instagram_img} /> </a>
                        <a href="https://github.com/Vetalu" target="_blank"><img src={GitHub_img} /> </a>
                        <a href="https://www.linkedin.com/in/vitali-umanski-6a3315203/" target="_blank"><img src={LinkedIn_img} /> </a>
                    </p>
            </div>
            <div className="Hi_img">
                <img src={Photo} />
            </div>
        </div>
    )
}