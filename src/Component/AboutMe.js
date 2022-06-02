import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HTML5_logo from '../img/Logos_slider/HTML5.svg';
import CSS_logo from '../img/Logos_slider/CSS.svg';
import JS_logo from '../img/Logos_slider/JS.svg';
import Liquid_logo from '../img/Logos_slider/liquid.png';
import React_logo from '../img/Logos_slider/React.svg';
import Redux_logo from '../img/Logos_slider/Redux.svg';
import SP_logo from '../img/SP_logo.svg'

export function AboutMe() {
    var width_wind = window.screen.width
    console.log(width_wind)

    React.useEffect(() => {
        function Resize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        }
        window.addEventListener('resize', Resize)
    }, [window.innerWidth])

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: window.innerWidth > 1000 ? 4 : window.innerWidth > 900 ? 3 : window.innerWidth > 450 ? 2 : 1,
        slidesToScroll: 1
    };
    return (
        <div className="About_me">
            <div className="top_block">
            <Slider {...settings}>
                <div>
                    <img src={HTML5_logo} />
                </div>
                <div>
                    <img src={CSS_logo} />
                </div>
                <div>
                    <img src={JS_logo} />
                </div>
                <div>
                    <img className="Liquid_logo" src={Liquid_logo} />
                </div>
                <div>
                    <img src={React_logo} />
                </div>
                <div>
                    <img src={Redux_logo} />
                </div>
            </Slider>
            </div>
            <div className="left_middle">
                <p>
                    I've started my FrontEnd path from August 2020, entered IT academy "Step". From August 2020 to February 2021 I learned basic knowlege of HTML5, CSS and JavaScript ES6. After the courses find my first job at outsourse company "Sphere Partners" in Kyiv. Within 9 months worked with technology from Shopify Liquid, JS and CSS/SCSS. Also had mentoring by Senior React developer, studied for 4 months. During this time lerned basic about functional components, and Redux. Also interested thing happend, inside "Sphere Partners" during mentoring time also involved in an internal project on Wordpress technology and PHP, that was interesting experience for me. My targer was to build on PHP landing page, that wasn't been to hard, but very exciting. From January 2022 i in seacrh of new job where i can grow as React developer and and be useful to the company and colleagues.
                </p>
                <div>
                    About Hobbies
                    <p>
                        My main hobby is almost everything. Realy, like every day surfing in internet, or play video games or watch TV series or films. I love to find something new, it can be everything, about frameworks, or some technology, even about cats :)               
                            <br /> In past i've been a professional football player, and still love and interesting in football, sometimes i love to watch another types of sports, for example basketball, box and tennis      
                    </p>          
                </div>
            </div>
            <div className="right_middle">
                <img src={SP_logo} />
                <p>
                March 2021 — January 2022
                </p>
                    Main stack of technologies on project:
                    <br/>
                    <ul>
                        <li>Liquid.HTML</li>
                        <li>CSS/SCSS</li>
                        <li>JavaScript</li>
                        <li>Git and GitHub</li>
                        <li>Simple docker usage</li>
                    </ul>           
                </div>
        </div>
    )
}