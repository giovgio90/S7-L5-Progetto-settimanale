/* {
    name: "Samsung Galaxy S21 Ultra",
    description: "Powerful Android smartphone with a stunning display.",
    brand: "Samsung",
    imageUrl: "https://www.mobhi.it/22116-large_default/Array.jpg",
    price: 1199.99,
  },
  {
    name: "Google Pixel 6 Pro",
    description: "High-quality camera phone with pure Android experience.",
    brand: "Google",
    imageUrl: "https://m.media-amazon.com/images/I/71SGl7xwR-L.jpg",
    price: 899.99,
  },
  {
    name: "OnePlus 9",
    description: "Flagship killer with top-tier performance.",
    brand: "OnePlus",
    imageUrl: "https://www.mytrendyphone.it/images/OnePlus-9-128GB-Astral-Black-6921815615378-25032021-01-p.webp",
    price: 699.99,
  },
  {
    name: "Xiaomi Mi 11",
    description: "Feature-packed smartphone with a competitive price.",
    brand: "Xiaomi",
    imageUrl: "https://m.media-amazon.com/images/I/61MiG25l5iS.jpg",
    price: 599.99,
  },
  {
    name: "Sony Xperia 1 III",
    description: "Sony's flagship with 4K display and advanced camera tech.",
    brand: "Sony",
    imageUrl:
      "https://ae01.alicdn.com/kf/S22681f28b9b240fd830432b7df5cb5e6o/Sony-Xperia-1-iii-5G-XQ-BC72-256GB-512GB-telefono-cellulare-originale-6-5-Snapdragon-888.jpg",
    price: 1099.99,
  },
  {
    name: "LG Velvet",
    description: "Elegant design with solid performance.",
    brand: "LG",
    imageUrl: "https://assets.gheginonline.it/3/products/images/000/806/8806087045697.jpg",
    price: 499.99,
  },
  {
    name: "Huawei P50 Pro",
    description: "Powerful camera system and stylish design.",
    brand: "Huawei",
    imageUrl: "https://d1eh9yux7w8iql.cloudfront.net/product_images/626680_6a0d3a65-f556-4bbc-b26f-ddece201c9c0.jpg",
    price: 999.99,
  },
  {
    name: "Motorola Edge+",
    description: "Motorola's flagship with a curved display.",
    brand: "Motorola",
    imageUrl: "https://cdn.idealo.com/folder/Product/200311/3/200311360/s10_produktbild_max/motorola-edge-plus.jpg",
    price: 799.99,
  },
  {
    name: "Oppo Find X4",
    description: "Innovative design and cutting-edge technology.",
    brand: "Oppo",
    imageUrl: "https://specifications-pro.com/wp-content/uploads/2021/10/Oppo-Find-X4-Lite-600x600.jpg",
    price: 899.99,
  },
  {
    name: "Nokia 8.4",
    description: "Pure Android experience with reliable performance.",
    brand: "Nokia",
    imageUrl: "https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2021/05/Nokia-8.4-5G-Official-Image--500x500.png",
    price: 449.99,
  },
  {
    name: "Asus ZenFone 8",
    description: "Compact powerhouse with strong specs.",
    brand: "Asus",
    imageUrl: "https://cdn-files.kimovil.com/default/0006/05/thumb_504483_default_big.jpeg",
    price: 599.99,
  },
];*/

window.onload = async () => {
  async function createProduct(productData) {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "GET",
        body: JSON.stringify(productData),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjZhOTEwYmNhMDAwMTQ1ODNmZDkiLCJpYXQiOjE2OTI5NjkxNTEsImV4cCI6MTY5NDE3ODc1MX0.kK6fMneVTM5xMHXqSPKg7rfNsst3FG7ungWxhsYpERw",
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        const newProduct = await resp.json();
        console.log("Nuovo prodotto creato:", newProduct);

        // Creazione della card e inserimento nell'HTML
        const productCardsContainer = document.getElementById("product-cards");
        const card = createCard(newProduct);
        productCardsContainer.appendChild(card);
      } else {
        console.error("Errore durante la creazione del prodotto:", resp.statusText);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  }

  // ... (il codice successivo rimane invariato)

  function createCard(productData) {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
      <div class="card">
        <img src="${productData.imageUrl}" class="card-img-top" alt="${productData.name}">
        <div class="card-body">
          <h5 class="card-title">${productData.name}</h5>
          <p class="card-text">${productData.description}</p>
          <p class="card-text">Brand: ${productData.brand}</p>
          <p class="card-text">Price: $${productData.price.toFixed(2)}</p>
        </div>
      </div>
    `;

    return card;
  }

  // Carica i prodotti quando la pagina è pronta
  document.addEventListener("DOMContentLoaded", loadProducts);
};
