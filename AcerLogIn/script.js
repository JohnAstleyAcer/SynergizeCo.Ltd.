document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
  
    // Switch between forms
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  
    // Handle sign-up
    signUpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('signUpName').value.trim();
      const email = document.getElementById('signUpEmail').value.trim();
      const password = document.getElementById('signUpPassword').value.trim();
  
      if (name && email && password) {
        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        alert('Account created successfully!');
        container.classList.remove("right-panel-active");
        signUpForm.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  
    // Handle login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
      
        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));
      
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          alert(`Welcome, ${storedUser.name}! Redirecting to the main page.`);
          window.location.href = "MainPage.html"; // Redirect to the new main page file
        } else {
          alert('Invalid email or password. Please try again.');
        }
      });
  });
  