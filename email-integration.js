// email-integration.js

// Import EmailJS library
import emailjs from 'emailjs-com';

// Initialize EmailJS with your service ID
emailjs.init('service_tc5i0el');

// Function to send student performance reports
function sendStudentPerformanceReport(studentEmail, reportData) {
    const templateParams = {
        to_email: studentEmail,
        report: reportData,
        from_email: 'joseproquimica@gmail.com'
    };

    // Sending email
    emailjs.send('service_tc5i0el', 'template_id_here', templateParams)
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
        }, (err) => {
            console.error('Failed to send email:', err);
        });
}

// Example usage (replace with actual data)
// sendStudentPerformanceReport('student@example.com', 'Your progress report here');
