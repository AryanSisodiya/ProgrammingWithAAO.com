import React from 'react'

export const Form = ({ loader }) => {

    return (
        <div id="contact">
            <h2 id="contact-head">Contact Us</h2>
            <form action="" className="contact" method="get">
                <input type="text" id="client-name" name="Client_name" placeholder="Enter Your Name" />
                <input type="number" id="contact_no1" name="contact_no1" placeholder="Write Your Contact No. 1 (with Country Code)" />
                <input type="number" id="contact_no2" name="contact_no2" placeholder="Write Your Contact No. 2 (with Country Code)" />
                <textarea name="help" id="help" cols="30" rows="10" placeholder="How may we help you?"></textarea>
                <textarea name="Issue" id="issue" cols="30" rows="10" placeholder="Write your Issue/ Why do you want to Contact us?/ Problem"></textarea>
                <input type="email" id="client-email" name="client_email" placeholder="Write Your email" />
                <input type="button" id="submit_btn" placeholder="Submit" onClick={loader} value="Submit" />
                <input type="reset" id="reset_btn" placeholder="Reset" onClick={loader} />
            </form>
        </div>
    )
}
