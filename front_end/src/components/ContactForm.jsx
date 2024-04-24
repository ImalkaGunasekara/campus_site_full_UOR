import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/send-email", {
                name,
                email,
                subject,
                message,
                senderEmail: email, // Use the email state for sender's email
            });
            alert("Message sent successfully!");
            // Optionally, clear the form fields after submission
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Enter your subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <textarea rows="8" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            {/* Remove the additional input field for sender's email */}
            <button type="submit" className="hero-btn red-btn">Send Message</button>
        </form>
    );
};

export default ContactForm;

