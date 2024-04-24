import React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactForm from "./components/ContactForm";

const Contact = () => {
    return(
    <div>
        <section className="sub-header">
            <NavBar />
            <h1>Contact Us</h1>
        </section>

        {/* <!-- Contact Us --> */}

        <section className="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3801575517105!2d80.19196459999999!3d6.0793684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1714b88f66a7b%3A0x8a7feea89839a01a!2sFaculty%20of%20Engineering%2C%20University%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1710050808321!5m2!1sen!2slk"
                    width="600"
                    height="450"
                    style={{ border: "0" }} // Corrected here
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </section>

        <section className="contact-us">
            <div className="row">
                <div className="contact-col">
                    <div>
                        <i className="fa fa-home"></i>
                        <span>
                            <h5>ABC Solutions, Down South</h5>
                            <p>Hapugala, Galle</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5>+1 0123456789</h5>
                            <p>Monday to Saturday, 10AM to 6PM</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <span>
                            <h5>imalka@gmail.com</h5>
                            <p>Email us your query</p>
                        </span>
                    </div>
                </div>
                <div className="contact-col">
                    {/* <ContactForm />                   */}
                </div>
            </div>
        </section>


        

        {/* <!-- Footer --> */}

        <Footer />
        
    </div>
    )
}

export default Contact;