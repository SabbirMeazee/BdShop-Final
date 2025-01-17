import React from 'react'

function Nopage() {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f8f9fa",
            color: "#343a40",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
        },
        errorCode: {
            fontSize: "8rem",
            fontWeight: "bold",
            color: "#dc3545",
        },
        errorMessage: {
            fontSize: "2rem",
            margin: "1rem 0",
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "2rem",
        },
        homeLink: {
            display: "inline-block",
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007bff",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
        },
        homeLinkHover: {
            backgroundColor: "#0056b3",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.errorMessage}>Page Not Found</h2>
            <p style={styles.description}>
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <a
                href="/"
                style={styles.homeLink}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.homeLinkHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.homeLink.backgroundColor)}
            >
                Go Back Home
            </a>
        </div>
    );


}

export default Nopage
