// performance-email-integration.js

// Initialize EmailJS with the service ID
(function() {
    emailjs.init('service_tc5i0el');
})();

// Function to generate progress reports showing student performance across trials
function generateProgressReport(studentData) {
    // Example structure for the report
    let report = '';
    let totalScore = 0;
    let totalTrials = studentData.length;
    let scores = [];

    studentData.forEach(trial => {
        totalScore += trial.score;
        scores.push(trial.score);
        report += `Trial ${trial.id}: Score ${trial.score}/100\n`;
    });

    let averageScore = totalScore / totalTrials;
    report += `\nAverage Score: ${averageScore.toFixed(2)}/100\n`;
    report += `Scores: ${scores.join(', ')}\n`;
    return report;
}

// Function to send emails with performance data
function sendPerformanceReport(studentEmail, reportContent) {
    let emailParams = {
        to_email: studentEmail,
        message: reportContent
    };

    emailjs.send('service_tc5i0el','template_performance_report', emailParams)
    .then(function(response) {
        console.log('Email sent successfully:', response);
    }, function(error) {
        console.log('Failed to send email:', error);
    });
}

// Integration with the existing quiz/trilhas system
function onQuizCompletion(studentData) {
    const report = generateProgressReport(studentData);
    sendPerformanceReport('joseproquimica@gmail.com', report);
}