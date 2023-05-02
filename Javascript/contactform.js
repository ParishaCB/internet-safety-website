///////////////////////////////CONTACT FORM VALIDATION//////////////////////////

//VALIDATING THE FIRST AND LAST NAME FIELD TO ENSURE ONLY ALPHABET CHARACTERS ARE ENTERED
function ValidateFName() {
{
if (/[^a-zA-Z]/.test(contactform.firstname.value))
{
document.getElementById("fnamemessage").innerHTML = "**You have entered invalid characters.";
return (false);
}else
document.getElementById("fnamemessage").innerHTML = "";
return (true);
}}

function ValidateLName() {
{
if (/[^a-zA-Z]/.test(contactform.lastname.value))
{
document.getElementById("lnamemessage").innerHTML = "**You have entered invalid characters.";
return (false);
}else
document.getElementById("lnamemessage").innerHTML = "";
return (true);
}}

// VALIDATING THE EMAIL FIELD TO ENSURE EMAIL IS WRITTEN IN THE CORRECT FORMAT
function ValidateEMail() {
{ //if email is not valid and its format is incorrect, return false and show error message
if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contactform.email.value))
{ 
document.getElementById("emailmessage").innerHTML = "**You have entered an invalid email.";
return (false);
}else //if email is found to be valid then let the user continue and don't show an error message
document.getElementById("emailmessage").innerHTML = "";  
return (true);
}}

//VALIDATING THE PHONE NUMBER TO ENSURE THAT ONLY NUMBERS HAVE BEEN ENTERED 
function ValidatePhone() {
{ 
if (!/^[0-9 \.-]+$/.test(contactform.phone.value))
{ 
document.getElementById("phonemessage").innerHTML = "**You have entered an invalid number.";
return (false);
}else 
document.getElementById("phonemessage").innerHTML = "";  
return (true);
}}
