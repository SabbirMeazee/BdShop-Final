import React from "react";

const Blog = () => {
    const styles = {
        container: {
            padding: "20px",
            margin: "0 auto",
            maxWidth: "800px",
            fontFamily: "Georgia, serif",
            color: "#333",
            lineHeight: "1.8",
        },
        heading: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#444",
        },
        reviewCard: {
            marginBottom: "1.5rem",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fdfdfd",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        },
        reviewerName: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "5px",
            color: "#007bff",
        },
        reviewDate: {
            fontSize: "0.9rem",
            color: "#999",
            marginBottom: "10px",
        },
        reviewText: {
            fontSize: "1rem",
            color: "#555",
        },
        highlight: {
            color: "#007bff",
            fontWeight: "bold",
        },
    };

    const reviews = [
        {
            name: "Sophia Williams",
            date: "January 15, 2025",
            text: "This blog has been an invaluable resource for my e-commerce journey. The insights and tips are practical and easy to apply!",
        },
        {
            name: "Liam Johnson",
            date: "January 12, 2025",
            text: "The quality of content here is unmatched. I particularly loved the recent article on customer retention strategies. Kudos to the team!",
        },
        {
            name: "Olivia Brown",
            date: "January 10, 2025",
            text: "Amazing blog with detailed guides. I've learned so much about scaling my online business. Thank you for the hard work!",
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>What Readers Are Saying</h1>
            {reviews.map((review, index) => (
                <div key={index} style={styles.reviewCard}>
                    <p style={styles.reviewerName}>{review.name}</p>
                    <p style={styles.reviewDate}>{review.date}</p>
                    <p style={styles.reviewText}>
                        {review.text.includes("blog") ? (
                            <>
                                This <span style={styles.highlight}>blog</span>: {review.text}
                            </>
                        ) : (
                            review.text
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
