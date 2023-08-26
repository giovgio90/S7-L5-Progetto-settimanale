const URL = "https://striveschool-api.herokuapp.com/api/product/";
const productId = new URLSearchParams(window.location.search).get("productId");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + productId, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5ZTQ1ODUxNWY0MTAwMTQ2OTc5MWMiLCJpYXQiOjE2OTMwNDk5NTgsImV4cCI6MTY5NDI1OTU1OH0.3dn8Qx5W5mpbERlS5KTRyPedQL4ggcKrdKomjtisLIk",
        "Content-Type": "application/json",
      },
    });

    const products = await resp.json();
    console.log(products);

    const row = document.getElementById("row");
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
            <div class="card mx-auto w-50">
            <img src="${products.imageUrl}" class="card-img-top">
            <div class="card-body">
              <h5 class="name card-title">${products.name}</h5>
              <p class="description card-text">${products.description}</p>
              <p class="brand card-text">${products.brand}</p>
              <p class="price card-text"><strong>${products.price}€</strong></p>
              <p class="price card-text"><strong>id</strong>: ${products._id}</p>
              <a href="./BackOffice.html?productId=${products._id}" class="btn btn-primary">Modifica Prodotto</a>
            </div>
            </div>`;

    row.appendChild(col);
  } catch (error) {
    console.log(error);
  }
});
