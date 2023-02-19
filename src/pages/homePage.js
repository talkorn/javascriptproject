import initialPicturesList from "../components/List.js";
import initialPicturesCards from "../components/cards.js";
import initialPicturesCarousel from "../components/carousel.js";
let picturesArr;

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
