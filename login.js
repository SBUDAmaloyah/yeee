document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Send login request to the server and check credentials
    // You need to implement server-side logic to verify the credentials
    // and return a response to grant or deny access to the home page
  });
  
  