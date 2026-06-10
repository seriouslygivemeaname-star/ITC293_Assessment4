/*
    AerisAg Newsletter Signup JavaScript
    Author: Simon Smith
    Date: June 2026
    Purpose: Displays a welcome message and validates the newsletter form.
*/

// Displays a welcome alert when the newsletter signup page loads
function showWelcomeMessage() {
    alert("Welcome to the AerisAg Corporation/Ltd. - Newsletter Signup");
}

// Validates the newsletter form before it is submitted
function validateNewsletterForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var emailAddress = document.getElementById("emailAddress").value.trim();

    // Check whether the first name field is empty
    if (firstName === "") {
        alert("Please enter your first name before submitting the form.");
        document.getElementById("firstName").focus();
        return false;
    }

    // Check whether the last name field is empty
    if (lastName === "") {
        alert("Please enter your last name before submitting the form.");
        document.getElementById("lastName").focus();
        return false;
    }
    
        // Check whether the email address field is empty
      if (emailAddress === "") {
        alert("Please enter your email address before submitting the form.");
         document.getElementById("emailAddress").focus();
         return false;
    }


    // Shows confirmation message when required fields are complete
    alert("Thank you for signing up to the AerisAg newsletter.\n\n You will now be returned to the Web Skills Page");

    // Sends user back to the Homepage
    window.location.href = "ssmith_A4_web_skills.html";

    // Prevents the browser from trying to submit to a missing server file
    return false;
}