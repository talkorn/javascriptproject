let picturesArr;
let listDiv;

const initialPicturesList = (picturesArrFromHomePage) => {
  picturesArr = picturesArrFromHomePage;
  listDiv = document.getElementById("home-page-pictures-list");
  console.log("🚀 ~ file: List.js:7 ~ initialPicturesList ~ listDiv", listDiv);
  createList();
};

const createItem = (id, imgUrl, alt, credit, price) => {
  return `
  <li class="list-group-item">
        <div class="row">
            <div class="col-lg-2">
                <img src="${imgUrl}" class="img-fluid" type="image" alt="${alt}">
            </div>
            <div class="col-lg-8">
                <div class="card-body">
                    <h5 class="card-title">${alt}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${credit}</h6>
                    <p class="card-text">${price}
                    </p>

                </div>
            </div>
            <div class="col-lg-1">
                <button type="button" class="btn btn-info w-100">
                    <i class="bi bi-currency-dollar"></i> Buy now
                </button>
                <button type="button" class="btn btn-primary w-100" id="propertyListEditBtn-${id}">
                    <i class="bi bi-pen-fill"></i> Edit
                </button>
                <button type="button" class="btn btn-secondary w-100" id="propertyListDeleteBtn-${id}">
                    <i class="bi bi-x-circle-fill"></i> Delete
                </button>
            </div>
        </div>

    </li>

`;
};

const createList = () => {
  for (let pictures of picturesArr) {
    listDiv.innerHTML += createItem(
      pictures.id,
      pictures.imgUrl,
      pictures.alt,
      pictures.credit,
      pictures.price
    );
  }
};

export default initialPicturesList;
