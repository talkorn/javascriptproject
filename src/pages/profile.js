import validName from "../validation/nameValidation.js";
import validEmail from "../validation/emailValidation.js";
import validPassword from "../validation/passwordValid.js";
import { pageChange } from "../routes/router.js";
import PAGES from "../models/pageModel.js";

let firstNameFromProfile = document.getElementById("firstNameFromProfile");
let lastNameFromProfile = document.getElementById("lastNameFromProfile");
let validationFirstNameFromProfile = document.getElementById(
  "validationFirstNameFromProfile"
);
let validationLastNameFromProfile = document.getElementById(
  "validationLastNameFromProfile"
);
let emailFromProfile = document.getElementById("emailFromProfile");
let validationEmailFromProfile = document.getElementById(
  "validationEmailFromProfile"
);
let PasswordFromProfile = document.getElementById("PasswordFromProfile");
let validationPasswordFromProfile = document.getElementById(
  "validationPasswordFromProfile"
);
let validationRePasswordFromPassword = document.getElementById(
  "validationRePasswordFromPassword"
);
let RePasswordFromProfile = document.getElementById("RePasswordFromProfile");
let profileBotton = document.getElementById("profileBotton");
let AdminCheckBoxFromProfile = document.getElementById(
  "AdminCheckBoxFromProfile"
);
let stateFromProfile = document.getElementById("stateFromProfile");
let countryFromProfile = document.getElementById("countryFromProfile");
let cityFromProfile = document.getElementById("cityFromProfile");
let streetFromProfile = document.getElementById("streetFromProfile");
let houseFromProfile = document.getElementById("houseFromProfile");
let zipFromProfile = document.getElementById("zipFromProfile");
let numberFromProfile = document.getElementById("numberFromProfile");
let email1;
let password1;
let btnsValid;
let passworsbtnValid = false;
let rePassworsbtnValid = false;
let emailbtnValid = false;
let firstNamebtnValid = false;
let lastNamebtnValid = false;
let name;

window.addEventListener("load", () => {
  let users = localStorage.getItem("users");
  let existUser = localStorage.getItem("existUser");
  existUser = JSON.parse(existUser);
  console.log(existUser);
  console.log(users);
  if (users && existUser) {
    firstNameFromProfile.value = existUser.firstName;
    lastNameFromProfile.value = existUser.lastName;
    stateFromProfile.value = existUser.state;
    countryFromProfile.value = existUser.country;
    cityFromProfile.value = existUser.city;
    streetFromProfile.value = existUser.street;
    houseFromProfile.value = existUser.houseNumber;
    zipFromProfile.value = existUser.zipCode;
    numberFromProfile.value = existUser.phone;
    emailFromProfile.value = existUser.email;
    PasswordFromProfile.value = existUser.password;
    RePasswordFromProfile.value = existUser.password;
    AdminCheckBoxFromProfile.checked = existUser.isAdmin;
  }
});

document.getElementById("profileDiv").addEventListener("input", () => {
  console.log("ok");
  CheckName(firstNameFromProfile, validationFirstNameFromProfile);
  checkPassword(PasswordFromProfile, validationPasswordFromProfile);
  checkEmail(emailFromProfile, validationEmailFromProfile);
  CheckLastName(lastNameFromProfile, validationLastNameFromProfile);
});
firstNameFromProfile.addEventListener("input", () => {
  CheckName(firstNameFromProfile, validationFirstNameFromProfile);
  if (btnsValid) {
    btnok();
  }
});

lastNameFromProfile.addEventListener("input", () => {
  CheckLastName(lastNameFromProfile, validationLastNameFromProfile);
  if (btnsValid) {
    lastNamebtnValid = true;
    btnok();
  }
});

const CheckName = (theName, err) => {
  console.log("ok");
  name = validName(theName.value);

  if (!name.length) {
    err.classList.add("d-none");
    btnok();
    return (firstNamebtnValid = true);

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = name;
    firstNamebtnValid = false;
    profileBotton.disabled = true;
    return;
  }
};
const CheckLastName = (theName, err) => {
  name = validName(theName.value);

  if (!name.length) {
    console.log("lastok");
    err.classList.add("d-none");
    lastNamebtnValid = true;
    btnok();
    return;

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = name;
    lastNamebtnValid = false;
    profileBotton.disabled = true;
    err.classList.remove("d-none");
    return;
  }
};
const checkEmail = (theEmail, err) => {
  console.log("emailok");
  email1 = validEmail(theEmail.value);

  if (!email1.length) {
    err.classList.add("d-none");
    btnok();
    emailbtnValid = true;
    return;

    /* the button can work */
  } else {
    /* error */
    err.innerHTML = email1;
    emailbtnValid = false;
    profileBotton.disabled = true;
    err.classList.remove("d-none");
    return;
  }
};

/* check if the Passwpord from home signin isgood */
PasswordFromProfile.addEventListener("input", () => {
  checkPassword(PasswordFromProfile, validationPasswordFromProfile);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
  if (RePasswordFromProfile.value === PasswordFromProfile.value) {
    rePassworsbtnValid = true;
    validationRePasswordFromPassword.classList.add("d-none");
    btnok();
  } else {
    validationRePasswordFromPassword.innerHTML = "Un correct Password";
    validationRePasswordFromPassword.classList.add("d-block");
    validationRePasswordFromPassword.classList.remove("d-none");
    rePassworsbtnValid = false;
    profileBotton.disabled = true;
  }
});
RePasswordFromProfile.addEventListener("input", () => {
  checkPassword(PasswordFromProfile, validationPasswordFromProfile);
  if (btnsValid) {
    passworsbtnValid = true;
    btnok();
  }
  if (RePasswordFromProfile.value === PasswordFromProfile.value) {
    rePassworsbtnValid = true;
    validationRePasswordFromPassword.classList.add("d-none");
    btnok();
  } else {
    validationRePasswordFromPassword.innerHTML = "Un correct Password";
    validationRePasswordFromPassword.classList.add("d-block");
    validationRePasswordFromPassword.classList.remove("d-none");
    rePassworsbtnValid = false;
    profileBotton.disabled = true;
  }
});

const checkPassword = (thePassword, err) => {
  password1 = validPassword(thePassword.value);

  if (!password1.length) {
    err.classList.add("d-none");
    passworsbtnValid = true;
    if (RePasswordFromProfile.value === PasswordFromProfile.value) {
      rePassworsbtnValid = true;
      validationRePasswordFromPassword.classList.add("d-none");
      btnok();
    } else {
      profileBotton.disabled = true;
      rePassworsbtnValid = false;
      validationRePasswordFromPassword.innerHTML = "Un correct Password";
      validationRePasswordFromPassword.classList.add("d-block");
      validationRePasswordFromPassword.classList.remove("d-none");
    }
    return;

    /* the button can work */
  } else {
    /* error */
    err.classList.remove("d-none");
    err.innerHTML = password1;
    return (passworsbtnValid = false);
  }
};
/* ccheck if rePassword id similar to Password */
RePasswordFromProfile.addEventListener("input", () => {});

const btnok = () => {
  console.log(
    "re",
    rePassworsbtnValid,
    "pa",
    passworsbtnValid,
    "email",
    emailbtnValid,
    "last",
    lastNamebtnValid,
    "name",
    firstNamebtnValid
  );
  if (
    rePassworsbtnValid &&
    passworsbtnValid &&
    emailbtnValid &&
    lastNamebtnValid &&
    firstNamebtnValid
  ) {
    profileBotton.disabled = false;
  }
};

let isAdmin;
profileBotton.addEventListener(
  "click",
  () => {
    if (AdminCheckBoxFromProfile.checked) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    let users = localStorage.getItem("users");
    let existUser = localStorage.getItem("existUser");

    if (users && existUser) {
      //we have users

      users = JSON.parse(users); // convert from string to array of objects
      existUser = JSON.parse(existUser);
      console.log("userEmail");
      let userEmail = users.find(
        (item) => item.email === emailFromProfile.value
      );
      console.log("userEmail", userEmail);
      console.log("userEmail???????????", userEmail);
      let user = users.find((item) => item.id === existUser.id);

      if (userEmail && user.id !== userEmail.id) {
        console.log(
          "userEmail",
          userEmail.id,
          "user.id",
          user.id,
          "userEmail.id",
          userEmail.id
        );
        //the email already token
        /* showToast("The email already taken", false); */
        return;
      }
      if (user) {
        user.firstName = existUser.firstName = firstNameFromProfile.value;
        user.email = existUser.email = emailFromProfile.value;
        user.password = PasswordFromProfile.value;
        user.id = existUser.id = existUser.id;
        user.lastName = existUser.lastName = lastNameFromProfile.value;
        user.isAdmin = existUser.isAdmin = isAdmin;
        user.state = existUser.state = stateFromProfile.value;
        user.country = existUser.country = countryFromProfile.value;
        user.city = existUser.city = cityFromProfile.value;
        user.street = existUser.street = streetFromProfile.value;
        user.houseNumber = existUser.houseNumber = houseFromProfile.value;
        user.zipCode = existUser.zipCode = zipFromProfile.value;
        user.phone = existUser.phone = numberFromProfile.value;

        console.log("user", user.name);
        console.log("user", user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("existUser", JSON.stringify(existUser));
        document.getElementById("goodjob").classList.remove("d-none");
      }
    }
    setTimeout(() => {
      location.reload();
    }, 3000);
  },
  { once: true }
);
