"use strict";

(() => {
  const floorElem = document.querySelector(".floor");
  const launchBtn = document.querySelector(".btn-launch");

  const exhaustElem = document.querySelector(".exhaust");
  const imageWrap = document.querySelector(".image-wrapper");
  const spaceImg = document.querySelector(".space-image");

  console.log(launchBtn);
  launchBtn.addEventListener("click", function () {
    floorElem.classList.add("floor--move");
    imageWrap.classList.add("image-wrapper--overflow");
    spaceImg.classList.add("space-image--launched");
    exhaustElem.classList.add("exhaust--appear");
  });
})();
