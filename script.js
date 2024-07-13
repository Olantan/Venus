// Example in script.js for VENUS Fitness & Wellness Tracker

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Basic form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (replace with actual API call or backend integration)
    alert(`Thank you, ${name}! Your message has been sent.`);
    // You can add code here to send the form data to a backend server or perform further actions.
});

// Example for dynamic content update
document.getElementById('workoutSelect').addEventListener('change', function() {
    let selectedWorkout = this.value;
    let workoutDescription = document.getElementById('workoutDescription');

    // Update description based on selected workout
    if (selectedWorkout === 'cardio') {
        workoutDescription.textContent = 'Cardio workouts focus on increasing heart rate and burning calories.';
    } else if (selectedWorkout === 'strength') {
        workoutDescription.textContent = 'Strength training exercises focus on building muscle and strength.';
    } else if (selectedWorkout === 'flexibility') {
        workoutDescription.textContent = 'Flexibility exercises help improve range of motion and reduce injury risk.';
    } else {
        workoutDescription.textContent = 'Select a workout type to see its description.';
    }
});
