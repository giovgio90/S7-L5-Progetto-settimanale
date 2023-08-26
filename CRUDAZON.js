const product = {
  name: "Samsung Galaxy S21 Ultra",
  description: "Powerful Android smartphone with a stunning display.",
  brand: "Samsung",
  imageUrl: "https://www.mobhi.it/22116-large_default/Array.jpg",
  price: 1199.99,
};

/*{
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
      "https://bresciapc.com/wp-content/uploads/2021/07/Sony-Xperia-1-III.jpg",
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

const URL = "https://striveschool-api.herokuapp.com/api/product/";

const getData = async () => {
  try {
    const resp = await fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5ZTQ1ODUxNWY0MTAwMTQ2OTc5MWMiLCJpYXQiOjE2OTMwNDk5NTgsImV4cCI6MTY5NDI1OTU1OH0.3dn8Qx5W5mpbERlS5KTRyPedQL4ggcKrdKomjtisLIk",
      },
    });

    const products = await resp.json();
    console.log(products);

    const row = document.getElementById("product-cards");
    row.innerText = "";

    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-sm-12 col-md-4 col-lg-3 g-3";

      col.innerHTML = `
      <div class="card">
      <img src="${product.imageUrl}" class="card-img-top pt-2">
      <div class="card-body">
        <h5 class="name card-title">${product.name}</h5>
        <p class="description card-text">${product.description}</p>
        <p class="brand card-text fst-italic fw-medium">${product.brand}</p>
        <p class="price card-text mt-auto ">${product.price}€</p>
        
        <a href="./detailsPage.html?productId=${product._id}" class="btn btn-info ">Scopri di più</a>
        <a href="./BackOffice.html?productId=${product._id}" class="btn btn-success ">Modifica ora</a>
        
      </div>
      </div>`;

      row.appendChild(col);
    });
  } catch (error) {
    console.log(error);
  }
};
getData();
