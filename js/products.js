import products from "../db/products.json" assert { type: "json" };

const prodDiv = document.querySelector("#products-content");
const infoModal = document.getElementById("infoModal");
const txtName = document.querySelector("#txtFinder");

let templateProduct = `<div class="card" id="{id}" class="item">
          <img src="{img}" height="150px" />
          <h4 class="{lblSize}">{desc} / {brand}</h4>
          <div class="lblContent">
          <span class="lblPrice badge rounded-pill text-bg-secondary">S/ {price}</span>
          </div>
          <button id="btn-{id}" class="btn btn-link btn-add" data-bs-toggle="modal" data-bs-target="#infoModal" ><i class="fa fa-plus add-icon"></i>Agregar a la compra</button>
        </div>`;

const loadProducts = () => {
  products.forEach((p) => {
    const lblSize = p.desc.length > 20 ? "lbl-l" : "lbl-m";
    let item = templateProduct
      .replace("{id}", p.id)
      .replace("{img}", p.img)
      .replace("{desc}", p.desc)
      .replace("{lblSize}", lblSize)
      .replace("{brand}", p.brand)
      .replace("{price}", p.price.toFixed(2));
    prodDiv.innerHTML += item;
  });
};

const findProducts = (name) => {
  products.forEach((p) => {
    let item = document.getElementById(p.id);
    const text = `${p.desc} / ${p.brand}`;
    if (text.toLowerCase().includes(name.toLowerCase())) {
      item.classList.remove("filter");
    } else {
      item.classList.add("filter");
    }
  });
};

loadProducts();

document.querySelector("#btnFinder").onclick = () => {
  findProducts(txtName.value);
};

document.querySelector("#txtFinder").addEventListener("keyup", (evt) => {
  if (evt.keyCode === 13) {
    findProducts(txtName.value);
  }
});
