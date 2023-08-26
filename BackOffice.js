const productId = new URLSearchParams(window.location.search).get("productId");
const URL = productId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productId
  : "https://striveschool-api.herokuapp.com/api/product/";

const handleSubmit = async (event) => {
  event.preventDefault();
  const myProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image").value,
    price: parseInt(document.getElementById("price").value),
  };

  try {
    const resp = await fetch(URL, {
      method: productId ? "PUT" : "POST",
      body: JSON.stringify(myProduct),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5ZTQ1ODUxNWY0MTAwMTQ2OTc5MWMiLCJpYXQiOjE2OTMwNDk5NTgsImV4cCI6MTY5NDI1OTU1OH0.3dn8Qx5W5mpbERlS5KTRyPedQL4ggcKrdKomjtisLIk",
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      const resp = await fetch(URL, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5ZTQ1ODUxNWY0MTAwMTQ2OTc5MWMiLCJpYXQiOjE2OTMwNDk5NTgsImV4cCI6MTY5NDI1OTU1OH0.3dn8Qx5W5mpbERlS5KTRyPedQL4ggcKrdKomjtisLIk",
        },
      });
      const product = await resp.json();

      if (productId) {
        alert("Il prodotto con id " + product._id + " e' stato modificato.");
      } else {
        console.log(product._id);
        alert("Il prodotto e' stato creato con successo.");
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("brand").value = "";
        document.getElementById("price").value = "";
        document.getElementById("image").value = "";
      }
    }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const createBtn = document.getElementById("create-product-btn");
  const delBtn = document.getElementById("delBtn");
  const resetBtn = document.getElementById("fieldReset");

  if (productId) {
    const resp = await fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5ZTQ1ODUxNWY0MTAwMTQ2OTc5MWMiLCJpYXQiOjE2OTMwNDk5NTgsImV4cCI6MTY5NDI1OTU1OH0.3dn8Qx5W5mpbERlS5KTRyPedQL4ggcKrdKomjtisLIk",
      },
    });

    if (resp.ok) {
      const { name, description, brand, imageUrl, price } = await resp.json();

      document.getElementById("name").value = name;
      document.getElementById("description").value = description;
      document.getElementById("brand").value = brand;
      document.getElementById("price").value = price;
      document.getElementById("image").value = imageUrl;

      createBtn.innerText = "Modifica Prodotto";
      createBtn.className = "btn btn-primary bg-success border border-none me-auto";
      delBtn.classList.remove("d-none");
    }
  }

  const handleDelete = async () => {
    const control = confirm("Stai per eliminare il prodotto. Vuoi procedere?");
    if (control) {
      const resp = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5ZTQ1ODUxNWY0MTAwMTQ2OTc5MWMiLCJpYXQiOjE2OTMwNDk5NTgsImV4cCI6MTY5NDI1OTU1OH0.3dn8Qx5W5mpbERlS5KTRyPedQL4ggcKrdKomjtisLIk",
        },
      });
      const product = await resp.json();
      alert("Hai eliminato il prodotto con nome " + product.name + " e con id: " + product._id);
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("brand").value = "";
      document.getElementById("price").value = "";
      document.getElementById("image").value = "";
    } else {
      alert("Operazione annullata con successo");
    }
  };

  const resetFields = () => {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
  };

  delBtn.onclick = handleDelete;
  resetBtn.onclick = resetFields;
});
