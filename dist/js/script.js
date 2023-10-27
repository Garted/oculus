"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".products__list");
  const listitem = document.querySelectorAll(".list");
  const setup = document.querySelectorAll(".products__setup");
  const settings = document.querySelectorAll(".products__settings");

  function hideTab() {
    listitem.forEach((item) => {
      item.classList.remove("active");
    });
    setup.forEach((item) => {
      item.style.cssText = "display : none";
    });
    settings.forEach((item) => {
      item.style.cssText = "display : none";
    });
  }
  function showTabs(i = 0) {
    listitem[i].classList.add("active");
    setup[i].style.cssText = "display : block";
    settings[i].style.cssText = "display : grid";
  }
  hideTab();
  showTabs();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("list")) {
      listitem.forEach((item, i) => {
        if (target == item) {
          hideTab();
          showTabs(i);
        }
      });
    }
  });

  //Карточки игр

  class Games {
    constructor(image, alt, title, descr, parentSelector, ...classes) {
      this.image = image;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    putGame() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "games__item";
        element.classList.add("games__item");
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = ` <img class="games__image" src="${this.image}" alt="${this.alt}" />
  <div class="games__game-title">${this.title}</div>
  <div class="games__game-descr">
    ${this.descr}
  </div>
  <a class="games__link" href="#">see more</a>`;
      this.parent.append(element);
    }
  }

  new Games(
    "img/game-blade.jpg",
    "blade",
    "Blade & Sorcery: Nomad",
    "Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR",
    ".games .games__wrap"
  ).putGame();

  new Games(
    "img/game-population.jpg",
    "populat",
    "Population: One",
    "Climb anything. Fight everywhere. Experience battle royale only possible in VR",
    ".games .games__wrap"
  ).putGame();

  new Games(
    "img/game-supernatural.jpg",
    "supernatural",
    "Supernatural",
    "Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.",
    ".games .games__wrap"
  ).putGame();

  //Карточки товаров

  class Product {
    constructor(image, alt, title, descr, price, parentSelector, ...classses) {
      this.image = image;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }
    putProduct() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = "accesories__item";
        element.classList.add("accesories__item");
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `<img
    class="accessories__img"
    src="${this.image}"
    alt="${this.alt}"
  />
  <div class="accessories__product">${this.title}</div>
  <div class="accessories__descr">
    ${this.descr}
  </div>
  <div class="accessories__price">${this.price} USD</div>
  <button class="accessories__buy-button">BUY NOW</button>`;

      this.parent.append(element);
    }
  }

  new Product(
    "img/accessories-meta-quest.jpg",
    "meta",
    "Meta Quest 2 Carrying Case",
    "Protect your system–at home or away.",
    "$59.99",
    ".accessories .accessories__wrap"
  ).putProduct();

  new Product(
    "img/accessories-link-cable.jpg",
    "cable",
    "Link Cable",
    "Harness the power of your PC with this premium fiber-optic cable.",
    "$79.99",
    ".accessories .accessories__wrap"
  ).putProduct();

  new Product(
    "img/accessories-active-pack.jpg",
    "pack",
    "Meta Quest 2 Active Pack",
    "A wipeable facial interface, wrist straps, and knuckle straps.",
    "$69.99",
    ".accessories .accessories__wrap"
  ).putProduct();

  new Product(
    "img/accessories-gift-cards.jpg",
    "gift",
    "Meta Quest Gift Cards",
    "Redeemable on 350+ games and apps.",
    "$15-50 ",
    ".accessories .accessories__wrap"
  ).putProduct();
});
