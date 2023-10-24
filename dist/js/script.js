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
    settings[i].style.cssText = "display : block";
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
});
