"use strict";

(() => {
  let animArr = ["stars--slow", "stars--med", "stars--fast"];

  let animArr2 = ["str-slow", "str-med", "str-fast"];
  const floorElem = document.querySelector(".floor");
  const launchBtn = document.querySelector(".btn-launch");

  const exhaustElem = document.querySelector(".exhaust");
  const imageWrap = document.querySelector(".image-wrapper");
  const spaceImg = document.querySelector(".space-image");

  const stars = document.querySelectorAll(".stars");
  const starStr = document.querySelectorAll(".star-string");

  launchBtn.addEventListener("click", function () {
    floorElem.classList.add("floor--move");
    imageWrap.classList.add("image-wrapper--overflow");
    spaceImg.classList.add("space-image--launched");
    exhaustElem.classList.add("exhaust--appear");

    for (let i = 0; i < stars.length; i++) {
      stars[i].classList.add(animArr[getRandArrInd()]);
    }
    for (let i = 0; i < starStr.length; i++) {
      starStr[i].classList.add(animArr2[getRandArrInd()]);
    }
  });

  function getRandArrInd(max = 3) {
    return Math.floor(Math.random() * max);
  }
})();
