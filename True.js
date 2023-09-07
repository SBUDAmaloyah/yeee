function signup() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	// Perform signup logic here
	
	// Redirect to login after successful signup
	document.getElementById("signup").style.display = "none";
	document.getElementById("login").style.display = "block";
	document.getElementById("comment-section").style.display = "block";
  }
  
  function login() {
	var email = document.getElementById("loginEmail").value;
	var password = document.getElementById("loginPassword").value;
	
	// Display comment section after successful login
	document.getElementById("signup").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.getElementById("comment-section").style.display = "block";
  }
  
  function postComment() {
	var comment = document.getElementById("comment").value;
	
	// Save the comment and display it
	var commentElement = document.createElement("div");
	commentElement.classList.add("comment");
	commentElement.innerText = comment;
	document.getElementById("comments").appendChild(commentElement);
	
	// Clear the comment textarea
	document.getElementById("comment").value = "";
  }
  
  function showPage(page) {
	document.getElementById("home").style.display = "none";
	document.getElementById("about").style.display = "none";
	document.getElementById("comment-section").style.display = "none";
	
	document.getElementById(page).style.display = "block";
  }

  const passwordInput = document.querySelector(".pass-field input");
  const eyeIcon = document.querySelector(".pass-field i");
  const requirementList = document.querySelectorAll("requirement-List li");


  //An array of password requirements with corresponding 
  //A regular expressions and index of the requirements list item

  const requirements = [
	{regex: /.{8,}/, index: 0},
	{regex: /.[0-9]/, index: 1},
	{regex: /.[a-z]/, index: 2},
	{regex: /.[^A-Za-z0-9]/, index: 3},
	{regex: /.[A-Z]/, index: 4},
  ]

  passwordInput.addEventListener("keyup", (e) =>{
	requirements.forEach(item =>{

		const isValid = item.regex.test(e.target.value);
		const requirementItem = requirementList[item.index];


		if (isValid) {
			requirementItem.classList.add("valid");
			requirementItem.firstElementChild.className = "fa-solid fa-check";
		}else{
			requirementItem.classList.remove("valid");
			requirementItem.firstElementChild.className = "fa-solid fa-circle";
		}
	});
  });

  eyeIcon.addEventListener("click", () =>{
	passwordInput.type = passwordInput.type === "password" ? "text" : "password";

	eyeIcon.className = 'fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}';
  })