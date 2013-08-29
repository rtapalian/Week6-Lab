 /*
Author: Richard Tapalian
Week 6
Date: 08/28/2013
*/
/*Main Function activated by submit button
all variables are defined below.  Information is taken from
the form that is filled out by the user.*/
function submitForm() {
var name = document.getElementById('int-name');
var err_name = document.getElementById('err_name');
var lname = document.getElementById('int-lname');
var email = document.getElementById('email');
var comments = document.getElementById('int-comments');
var err_lname = document.getElementById('err_lname');
var err_email = document.getElementById('err_email');
var err_comments = document.getElementById('err_comments');
var myform=document.getElementById("myform");
var confirmation=document.getElementById("confirmation");
var confirm_results=document.getElementById("confirm_results");




var hasErrors = false;
/*Checks to see if there is a first name entered*/

/*Use regular expression to check length of first name and if there arent spaces*/
var firstnameRegex = /^[a-zA-Z]{3,15}$/;

if(firstnameRegex.test(name.value)) {
console.log(name.value + " good");
console.log(name.value.match(firstnameRegex));
err_name.innerHTML = "";
name.className = "good";
}
else {
err_name.innerHTML = "*";
name.className = "bad";
hasErrors = true;
console.log((name.value) + " bad");
}



/*Checks to see if there is a last name entered*/
/*Use regular expression to check length of last name and make sure there are only letters*/
var lastnameRegex = /^[a-zA-Z ]{3,15}$/;

if(lastnameRegex.test(lname.value)) {
console.log(lname.value + " good");
console.log(lname.value.match(lastnameRegex));
err_lname.innerHTML = "";
lname.className = "good";
}
else {
err_lname.innerHTML = "*";
lname.className = "bad";
hasErrors = true;
console.log((lname.value) + " bad");
}




/*Checks to make sure that email is properly formated with a period and @ symbol*/
/*Use the regular expression function to check*/
var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9]+\.[A-Za-z]{3}$/;

if ( emailRegex.test(email.value))
{
console.log(email.value + " good");
console.log(email.value.match(emailRegex));
err_email.innerHTML = "";
email.className = "good";
}
else {
err_email.innerHTML = "<em>please enter the email address like this john@gmail.com</em>";
email.className = "bad";
hasErrors = true;
console.log((email.value) + " bad");
}


/*Checks to see if the comment length is between 0 and 150 characters*/
/*Use a regular expression to check to see if there are any html tags within <>*/
var commentRegex = /\<[^\>]*\>/gi;
if (comments.value.length==0)
{
err_comments.innerHTML = "*";
comments.className="bad";
hasErrors = true;
}
else if (comments.value.length >150)
{
err_comments.innerHTML = "<em>Please enter between 1 and 150 characters</em>";
comments.className="bad";
hasErrors = true;
}
else {
err_comments.innerHTML = "";
comments.className = "good";
/*Use replace to take out the html out of the comments*/
comments.value = comments.value.replace(commentRegex,"");
}
/*Takes the good data entered and displays a confirmation page*/
var stringconfirm = "";
if (!hasErrors){
	myform.style.display="none";
	confirmation.style.display="block";
	confirmation.style.borderColor="blue";
	stringconfirm = "<ul>";
	stringconfirm=stringconfirm + "<li>Your First Name: "+name.value+"</li>";
	stringconfirm=stringconfirm + "<li>Your Last Name: "+lname.value+"</li>";
	stringconfirm=stringconfirm + "<li>Your Email: "+email.value+"</li>";
	stringconfirm=stringconfirm + "<li>Your Name: "+comments.value+"</li>";
	"</ul>";
	confirm_results.innerHTML = stringconfirm;
}
}
