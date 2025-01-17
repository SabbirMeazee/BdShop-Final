import React from 'react'

function Aboutus() {

    const styles = {
        container: {
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            color: "#343a40",
            backgroundColor: "#f8f9fa",
            lineHeight: "1.6",
        },
        heading: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
        },
        paragraph: {
            fontSize: "1.2rem",
            marginBottom: "1rem",
        },
        highlight: {
            color: "#007bff",
            fontWeight: "bold",
        },
        teamSection: {
            marginTop: "2rem",
        },
        teamHeading: {
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "1rem",
        },
        teamParagraph: {
            fontSize: "1rem",
        },
        button: {
            display: "inline-block",
            marginTop: "1.5rem",
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#931314",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Us</h1>
            <p style={styles.paragraph}>
                Welcome to <span style={styles.highlight}>YourStore</span>, your one-stop destination for all your shopping needs. We are dedicated to providing the best e-commerce experience with a focus on{" "}
                <span style={styles.highlight}>quality, reliability, and customer satisfaction</span>.
            </p>
            <p style={styles.paragraph}>
                Our mission is to make online shopping seamless and enjoyable for everyone. Whether you're looking for the latest fashion trends, electronics, or home essentials, we have it all at your fingertips.
            </p>
            <div style={styles.teamSection}>
                <h2 style={styles.teamHeading}>Our Team</h2>
                <p style={styles.teamParagraph}>
                    Behind <span style={styles.highlight}>YourStore</span> is a passionate and dedicated team of professionals who work tirelessly to curate the best products, ensure timely deliveries, and provide top-notch customer service.
                </p>
            </div>
            <a
                href="/contact"
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
                Contact Us
            </a>
        </div>
    );


}

export default Aboutus
