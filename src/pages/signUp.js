import validName from "../validation/nameValidation.js";
import validEmail from "../validation/emailValidation.js";
import validPassword from "../validation/passwordValid.js";
let firstName;
let lastName;
let name;
let validationFirstName;
let validationLastName;
let firstNamebtnValid = false;
let lastNamebtnValid = false;
let email;
let email1;
let validationEmail;
let emailbtnValid = false;
let password;
let password1;
let validationPassword;
let passworsbtnValid = false;
let rePassword;
let btnsValid;
let validationRePassword;
let rePassworsbtnValid = false;
let signUpBotton;

firstName = document.getElementById("name-from-signUp-page");
lastName = document.getElementById("lastName-from-signUp-page");
validationFirstName = document.getElementById("validationFirstName");
validationLastName = document.getElementById("validationLastName");
email = document.getElementById("email-from-signUp-page");
validationEmail = document.getElementById("validationEmail");
password = document.getElementById("Password-from-signUp-page");
validationPassword = document.getElementById("validationPassword");
validationRePassword = document.getElementById("validationRePassword");
rePassword = document.getElementById("RePassword-from-signUp-page");
signUpBotton = document.getElementById("signUpBotton");
/* check if first and last name are valid when you change the input */

firstName.addEventListener("input", () => {
  console.log("dbjhvcjs");
  CheckName(firstName, validationFirstName);
  console.log(btnsValid);
  if (btnsValid) {
    firstNamebtnValid = true;
    btnok();
  }
  console.log(
    "🚀 ~ file: signUp.js:18 ~ firstName.addEventListener ~ firstNamebtnValid",
    firstNamebtnValid
  );
});

lastName.addEventListener("input", () => {
  console.log("dbjhvcjs");
  CheckName(lastName, validationLastName);
  if (btnsValid) {
    lastNamebtnValid = true;
    btnok();
  }
  console.log(
    "🚀 ~ file: signUp.js:18 ~ lasttName.addEventListener ~ lastNamebtnValid",
    lastNamebtnValid
  );
});
const CheckName = (theName, err) => {
  name = validName(theName.value);

  if (!name.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = name;
    return (btnsValid = false);
  }
};

/* check if the email is valid when u change the input */
email.addEventListener("input", () => {
  checkEmail(email, validationEmail);
  if (btnsValid) {
    emailbtnValid = true;
    btnok();
  }
});

const checkEmail = (theEmail, err) => {
  email1 = validEmail(theEmail.value);

  if (!email1.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = email1;
    return (btnsValid = false);
  }
};

/* check if the Passwpord from home signin isgood */
password.addEventListener("input", () => {
  console.log("hgvhgv");
  checkPassword(password, validationPassword);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
  if (rePassword.value === password.value) {
    rePassworsbtnValid = true;
    validationRePassword.classList.add("d-none");
    btnok();
  } else {
    validationRePassword.innerHTML = "Un correct Password";
    validationRePassword.classList.add("d-block");
    validationRePassword.classList.remove("d-none");
    rePassworsbtnValid = false;
  }
});

const checkPassword = (thePassword, err) => {
  password1 = validPassword(thePassword.value);
  console.log(
    "🚀 ~ file: signUp.js:106 ~ checkPassword ~ password1",
    password1
  );

  if (!password1.length) {
    err.classList.add("d-none");
    return (btnsValid = true);
    /* the button can work */
  } else {
    /* error */
    err.innerHTML = password1;
    return (btnsValid = false);
  }
};
/* ccheck if rePassword id similar to Password */
rePassword.addEventListener("input", () => {
  console.log("hgvhgv");
  if (rePassword.value === password.value) {
    rePassworsbtnValid = true;
    validationRePassword.classList.add("d-none");
    btnok();
  } else {
    rePassworsbtnValid = false;
    validationRePassword.innerHTML = "Un correct Password";
    validationRePassword.classList.add("d-block");
    validationRePassword.classList.remove("d-none");
  }
});

const btnok = () => {
  if (
    rePassworsbtnValid &&
    passworsbtnValid &&
    emailbtnValid &&
    lastNamebtnValid &&
    firstNamebtnValid
  ) {
    console.log(
      rePassworsbtnValid,
      passworsbtnValid,
      emailbtnValid,
      lastNamebtnValid,
      firstNamebtnValid
    );
    signUpBotton.disabled = false;
  }
};
signUpBotton.addEventListener("click",()=>{
    

})