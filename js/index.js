
function sendMail(e) {
	e.preventDefault();

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var book = document.getElementById('book').value;
	var message = document.getElementById('message').value;
	axios({
		method: 'post',
 		 url: 'http://127.0.0.1:3000/sendMail',
 		 headers: {'Content-Type': 'application/json'},
 		 data: {
 			name:name,
 			email:email,
 			book:book,
 			message:message
    	}
	}) .then(function (response) {
    console.log(response);
  });
	// body...

	return false;	
}