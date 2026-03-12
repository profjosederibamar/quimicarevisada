// email-service.js

const emailjs = require('emailjs');

const server = emailjs.server.connect({
    user: 'your_email@example.com', // Your EmailJS email
    password: 'your_password', // Your EmailJS password
    host: 'smtp.emailjs.com',
    ssl: true
});

function sendPerformanceReport(studentEmail, reportData) {
    const message = `Hello,
\nHere is the performance report for the student:\n${reportData}\n\nBest,
Your Team`;
    
    server.send({
        text: message,
        to: studentEmail,
        from: 'your_email@example.com', // Your EmailJS email
        subject: 'Student Performance Report'
    }, (err, message) => {
        if (err) {
            console.log('Failed to send email:', err);
        } else {
            console.log('Email sent successfully:', message);
        }
    });
}

// Example usage
const reportData = 'Progress: A+ in Chemistry, A in Mathematics.';
sendPerformanceReport('joseproquimica@gmail.com', reportData);