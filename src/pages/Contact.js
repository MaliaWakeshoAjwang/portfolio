import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(''); // For displaying success/error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your EmailJS details
        const serviceId = 'service_portfolio';
        const templateId = 'template_portfolio';
        const publicKey = 'VKuj-NWGuQusibmrq';

        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    setStatus('Failed to send message. Please try again later.');
                }
            );
    };

    return (
        <div className='landing'>
            <div className={styles.contact}>
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send
                    </button>
                </form>
                {status && <p className={styles.statusMessage}>{status}</p>}
            </div>
        </div>
    );
};

export default Contact;