var emailFieldErrorIcon = document.getElementById("email-field-error-icon");
var emailFieldErrorText = document.getElementById("email-field-error-text");

function emailFieldOnInput(emailFieldElement)
{
    if (emailFieldElement.validity.valid)
    {
        emailFieldErrorIcon.style.display = "none";
        emailFieldErrorText.style.display = "none";
        emailFieldElement.style.borderColor = "hsl(0 36% 70% / 0.5)";
    }
    else
    {
        emailFieldErrorIcon.style.display = "block";
        emailFieldErrorText.style.display = "block";
        emailFieldElement.style.borderColor = "hsl(0, 93%, 68%)"
    }
}

function emailFieldOnInvalid()
{
    emailFieldErrorIcon.style.display = "block";
    emailFieldErrorText.style.display = "block";
    emailFieldElement.style.borderColor = "hsl(0, 93%, 68%)"
}