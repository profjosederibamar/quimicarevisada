// student-performance-system.js

// EmailJS configuration
const emailjs = require('emailjs');
const server = emailjs.server.connect({
    user:    "YOUR_EMAIL_USERNAME", // Your EmailJS username
    password: "YOUR_EMAIL_PASSWORD", // Your EmailJS password
    host:    "smtp.your-email-provider.com", // Your email host
});

// Class to represent a student
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.scores = [];
        this.progressMetrics = {
            totalScore: 0,
            averageScore: 0,
            progress: 0,
        };
    }

    // Function to add a score
    addScore(score) {
        this.scores.push(score);
        this.updateProgress();
    }

    // Function to update progress metrics
    updateProgress() {
        if (this.scores.length > 0) {
            this.progressMetrics.totalScore = this.scores.reduce((a, b) => a + b, 0);
            this.progressMetrics.averageScore = this.progressMetrics.totalScore / this.scores.length;
            this.progressMetrics.progress = this.calculateProgress(); // implement your progress calculation logic
        }
    }

    // Placeholder for calculating progress
    calculateProgress() {
        return (this.progressMetrics.averageScore / 100) * 100; // example calculation
    }

    // Function to generate a progress report
    generateReport() {
        const report = {
            name: this.name,
            email: this.email,
            scores: this.scores,
            totalScore: this.progressMetrics.totalScore,
            averageScore: this.progressMetrics.averageScore,
            progress: this.progressMetrics.progress,
        };
        return report;
    }

    // Function to send an email with the report
    sendEmailReport() {
        const report = this.generateReport();
        server.send({
            text: JSON.stringify(report, null, 2),
            from: this.email,
            to: 'recipient@example.com', // Replace with the recipient's email
            subject: `Performance Report for ${this.name}`
        }, function (err, message) {
            console.log(err || message);
        });
    }
}

// Example Usage
const student = new Student("John Doe", "john.doe@example.com");
student.addScore(85);
student.addScore(90);
student.sendEmailReport();