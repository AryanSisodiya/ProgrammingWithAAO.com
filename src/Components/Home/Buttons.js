import React from 'react';
import { Link } from "react-router-dom";

export const Buttons = ({loader}) => {
    return (
        <section id="buttons">
            <div id="code" className="button-div">
                <img src="Img/coding.jpg" alt="www.programingwithaao.com" className="button-img" />
                <h1 className="code-heading">
                    Browse Videos
                </h1>
                <p className="code-para">
                    Get your programming career started with these free video courses. All videos are available for many types of programming languages
                </p>
                <Link to="/courses" id="button-btn1" className="button-btn" onClick={loader}>Browse Video Courses</Link>
            </div>
            <div id="enroll" className="button-div">
                <img src="Img/enroll.png" alt="www.programingwithaao.com" className="button-img" />
                <h1 className="code-heading">
                    Enroll Student Now!
                </h1>
                <p className="code-para">
                    Enroll the Student now to see free videos courses. Enrollment is completely free, no money is required to enroll
                </p>
                <Link to="/enroll" id="button-btn2" className="button-btn" onClick={loader}>Enroll Now!</Link>
            </div>
            <div id="contact-us" className="button-div">
                <img src="Img/python.png" alt="www.programingwithaao.com" className="button-img" />
                <h1 className="code-heading">
                    Contact Us
                </h1>
                <p className="code-para">
                    Learn programming from our free courses. Examples are available with these tutorials. You can contact us any time for any doubt and We will get back to you!
                </p>
                <Link to="/contact" id="button-btn3" className="button-btn" onClick={loader}>Contact Us</Link>
            </div>
        </section>
    )
}
