//////////////////// SIGN UP FORM VALIDATION /////////////////////////////

//////////////////////////NAME VALIDATION///////////////////////////////
function Validatename() {
{
if (/[^a-zA-Z]/.test(signupForm.Name.value))
{
document.getElementById("messageName").innerHTML = "**Only alphabet characters are allowed. Please try again.";
return (false);
}else
document.getElementById("messageName").innerHTML = "";
return (true);
}}


////////////////////// EMAIL VALIDATION /////////////////////////////////
//ensure email address is in correct format and does not contain any invalid characters
function ValidateMail() {
{ //if email is not valid and its format is incorrect, return false and show error message
if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(signupForm.email.value))
{ 
document.getElementById("messagemail").innerHTML = "**You have entered an invalid email. Please try again.";
return (false);
}else //if email is found to be valid then let the user continue and don't show an error message
document.getElementById("messagemail").innerHTML = "";  
return (true);
}}

///////////////////// PASSWORD VALIDATION ////////////////////////
///////////////////Validation Needed://////////////////
//Password needs to be a minimum 8 characters long (no max length)
//Include at least 1 lowercase letter and 1 uppercase letter
//Needs to include at least 1 number
//Needs to have at least 1 special character => !@#$%^&*

function ValidatePassword() {
{
if (!/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(signupForm.password.value))
{
document.getElementById("passwordmessage").innerHTML = "**Password does not match format given. Please try again.";
return (false);
}else
document.getElementById("passwordmessage").innerHTML = "";
return (true);
}}

///////////////CHECK TO SEE WHETHER PASSWORDS MATCH////////////////
function CheckPassword() {  
var password = document.getElementById("password");
var repeatpassword = document.getElementById("password-repeat");

if(repeatpassword.value == password.value) {   
document.getElementById("messagerepeat").innerHTML = "";  
return (true);
}else {  
document.getElementById("messagerepeat").innerHTML = "Passwords did not match";  
return (false);
}}  