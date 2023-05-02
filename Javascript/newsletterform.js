///////////////////// NEWSLETTER VALIDATION /////////////////////////////

/////////////////////////NAME VALIDATION/////////////////////////////////
//validate the name to ensure that it only includes alphabetical characters
//and not any numbers or invalid symbols
function ValidateName() {
{
if (/[^a-zA-Z]/.test(newsForm.name.value))
{
document.getElementById("messagename").innerHTML = "**You have entered invalid characters. Please try again.";
return (false);
}else
document.getElementById("messagename").innerHTML = "";
return (true);
}}

/////////////////////EMAIL VALIDATION/////////////////////////////////////////
//validate the email address to ensure that the email is in the correct format
//and doesn't include any invalid characters
function ValidateEmail() {
{ //if email is valid and its format is correct, return true and show no error message
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newsForm.email.value))
{ 
document.getElementById("emailmessage").innerHTML = "";
return (true);
}else //if email is found to be invalid then show an error message
document.getElementById("emailmessage").innerHTML = "**You have entered an invalid email. Please try again.";  
return (false);
}}

