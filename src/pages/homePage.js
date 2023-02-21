import initialPicturesList from "../components/List.js";
import initialPicturesCards from "../components/cards.js";
import initialPicturesCarousel from "../components/carousel.js";
let picturesArr;
let cardsDisplayButton;
let carouselDisplayButton;
let listDisplayButton;
window.addEventListener("load", () => {
  picturesArr = localStorage.getItem("pics");

  if (!picturesArr) {
    return;
  }
  picturesArr = JSON.parse(picturesArr);
  console.log(picturesArr);
  initialPicturesList(picturesArr);
  initialPicturesCards(picturesArr);
  initialPicturesCarousel(picturesArr);
});
cardsDisplayButton = document.getElementById("cardsDisplayButton");
carouselDisplayButton = document.getElementById("carouselDisplayButton");
listDisplayButton = document.getElementById("listDisplayButton");
/* display change in home page */

cardsDisplayButton.addEventListener("click", () => {
  document
    .getElementById("home-page-pictures-cards")
    .classList.remove("d-none");
  document.getElementById("home-page-pictures-list").classList.add("d-none");
  document
    .getElementById("home-page-pictures-carousel")
    .classList.add("d-none");
  document.getElementById("cardpopup").classList.add("d-none");
});
carouselDisplayButton.addEventListener("click", () => {
  document.getElementById("home-page-pictures-cards").classList.add("d-none");
  document.getElementById("home-page-pictures-list").classList.add("d-none");
  document
    .getElementById("home-page-pictures-carousel")
    .classList.remove("d-none");
  document.getElementById("cardpopup").classList.add("d-none");
});
listDisplayButton.addEventListener("click", () => {
  document.getElementById("home-page-pictures-cards").classList.add("d-none");
  document.getElementById("home-page-pictures-list").classList.remove("d-none");
  document
    .getElementById("home-page-pictures-carousel")
    .classList.add("d-none");
  document.getElementById("cardpopup").classList.add("d-none");
});
