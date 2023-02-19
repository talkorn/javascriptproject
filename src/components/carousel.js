let picturesArr;
let carouselDiv;

const initialPicturesCarousel = (picturesArrFromHomePage) => {
  picturesArr = picturesArrFromHomePage;
  carouselDiv = document.getElementById("home-page-pictures-carousel");
  createCarousel();
};

const createItem = (id, imgUrl, alt, credit, price) => {
  return `
         
                                <div class="carousel-item active " data-bs-interval="2000">
                                    <img src="${imgUrl}" class=" w-100" alt="${alt}">
                                </div>alt
                               
                            </div>
                        </div>
                      

`;
};
let pictureInnerHtml;
const createCarousel = () => {
  for (let pictures of picturesArr) {
    pictureInnerHtml += createItem(
      pictures.id,
      pictures.imgUrl,
      pictures.alt,
      pictures.credit,
      pictures.price
    );
  }
  carouselDiv.innerHTML = pictureInnerHtml;
  console.log(
    "🚀 ~ file: carousel.js:35 ~ createCarousel ~ carouselDiv",
    carouselDiv
  );
};

export default initialPicturesCarousel;
