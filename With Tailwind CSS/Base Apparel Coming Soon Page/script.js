var emailFieldErrorIcon = document.getElementById("email-field-error-icon");
var emailFieldErrorText = document.getElementById("email-field-error-text");

function emailFieldOnInput(emailFieldElement)
{
    if (emailFieldElement.validity.valid)
    {
        emailFieldErrorIcon.style.display = "none";
        emailFieldErrorText.style.display = "none";
    }
    else
    {
        emailFieldErrorIcon.style.display = "block";
        emailFieldErrorText.style.display = "block";
    }
}

function emailFieldOnInvalid()
{
    emailFieldErrorIcon.style.display = "block";
    emailFieldErrorText.style.display = "block";
}