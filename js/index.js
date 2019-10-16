
function sendMail(e) {
	e.preventDefault();

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var book = document.getElementById('book').value;
	var message = document.getElementById('message').value;
	axios({
		method: 'post',
 		 url: 'https://secure-depths-46669.herokuapp.com/sendMail',
 		 headers: {'Content-Type': 'application/json'},
 		 data: {
 			name:name,
 			email:email,
 			book:book,
 			message:message
    	}
	}) .then(function (response) {
    console.log(response);
    alert("Message Sent");
  });
	// body...

	return false;	
}