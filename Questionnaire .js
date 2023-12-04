document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Validation rules
    const name = document.getElementById('name').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const experience = document.querySelector('input[name="experience"]:checked');
    const Confirm = document.querySelector('input[name="Confirm"]:checked');
    // Check if user enter first and last name 
    if (name.length < 2 || name === null || name === "") {
      alert('Please enter Your First and Last Name! ');
      return;
    }
  
    // Check if comments are at least 2 characters
    if (comments.length < 2 || comments === null || comments === "") {
      alert('Please Type Your Comment feedback .');
      return;
    }
  
    // Check if the experience radio button is selected
    if (!experience) {
      alert('Please select your experience.');
      return;
    }
    

    // check if the user confirm the feedback 
    if(!Confirm){
        alert('Please Click confirm');
      return;
    }

    // If all validations pass, simulate form submission or send data to a server
    alert('Form submitted successfully!');
  });

  