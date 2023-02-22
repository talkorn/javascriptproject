import PAGES from "./models/pageModel.js";
import { pageChange } from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/homePage.js";
import "./pages/signUp.js";
import "./pages/login.js";
import "./pages/profile.js";

document.getElementById("nav-home-page").addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
document.getElementById("nav-about-us-page").addEventListener("click", () => {
  pageChange(PAGES.ABOUTUS);
});
document.getElementById("nav-add-pic-page").addEventListener("click", () => {
  pageChange(PAGES.ADDPIC);
});
document.getElementById("nav-signup-page").addEventListener("click", () => {
  pageChange(PAGES.SIGNUP);
});
document.getElementById("nav-login-page").addEventListener("click", () => {
  pageChange(PAGES.LOGIN);
});
document.getElementById("nav-profile-page").addEventListener("click", () => {
  pageChange(PAGES.PROFILE);
});
document.getElementById("nav-logout-page").addEventListener("click", () => {
  pageChange(PAGES.LOGOUT);
});
