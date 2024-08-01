document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [1, 6],
                backgroundColor: ['#007BFF', '#ccc']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert('Feedback submitted: ' + feedback);
        // Implement actual feedback submission logic here
        document.getElementById('feedback').value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
}
