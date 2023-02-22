let picturesArr;
let cardsDiv;
let popupCardDiv;

const initialPicturesCards = (picturesArrFromHomePage) => {
  picturesArr = picturesArrFromHomePage;
  cardsDiv = document.getElementById("home-page-pictures-cards");

  createCards();
  popupCardDiv = document.getElementById("cardpopup");
};

const createItem = (id, imgUrl, alt, credit, price) => {
  return `
  <div class="card" style="width: 18rem;"id="card${id}">
  <img src="${imgUrl}" class="card-img-top" alt="${alt}">
  <div class="card-body">
    <p class="card-text">${credit}.</p>
  </div>
</div>  
    `;
};
let card;

const createCards = () => {
  for (let picture of picturesArr) {
    cardsDiv.innerHTML += createItem(
      picture.id,
      picture.imgUrl,
      picture.alt,
      picture.credit,
      picture.price
    );
  }

  createpopUp();
};
const createpopUp = () => {
  for (let picture of picturesArr) {
    card = `card${picture.id}`;

    document.getElementById(card).addEventListener("click", () => {
      const popup = () => {
        cardsDiv.classList.add("d-none");
        popupCardDiv.classList.remove("d-none");
        popupCardDiv.innerHTML = `
<div class="card " style="width: 40rem;">
  <img src="${picture.imgUrl}" class="card-img-top" alt="${picture.alt}">
  <div class="card-body">
    <h5 class="card-title">${picture.alt}</h5>
    <p class="card-text">${picture.credit}</p>
    <p class="card-text">${picture.price}</p>
    
    <div class="flex-direction: column">

    <a href="#" class="btn btn-dark" id="popupClose"><i class="bi bi-x-circle-fill"></i> close</a>
     <button type="button" class="btn btn-primary  " id="propertyListEditBtn-${picture.id}">
                    <i class="bi bi-pen-fill"></i> Edit
                </button>
                <button type="button" class="btn btn-secondary " id="propertyListDeleteBtn-${picture.id}">
                    <i class="bi bi-x-circle-fill"></i> Delete
                </button> </div>`;
        return;
      };
      popup();
      document.getElementById("popupClose").addEventListener("click", () => {
        cardsDiv.classList.remove("d-none");
        popupCardDiv.classList.add("d-none");
      });
    });
  }
};

export default initialPicturesCards;
