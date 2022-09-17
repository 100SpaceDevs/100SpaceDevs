"use strict";

(() => {
  let animArr = ["stars--slow", "stars--med", "stars--fast"];

  let animArr2 = ["str-slow", "str-med", "str-fast"];
  const floorElem = document.querySelector(".floor");
  const launchBtn = document.querySelector(".btn-launch");
  const landBtn = document.querySelector(".btn-land");

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

    launchBtn.classList.add("btn--hide");
    landBtn.classList.add("btn--show");
  });

  landBtn.addEventListener("click", function() {
    floorElem.classList.remove("floor--move");
    imageWrap.classList.remove("image-wrapper--overflow");
    spaceImg.classList.remove("space-image--launched");
    exhaustElem.classList.remove("exhaust--appear");

    for(let i=0; i < stars.length; i++) {
      if(stars[i].classList.contains(animArr[0])) {
        stars[i].classList.remove(animArr[0]);
      } else if(stars[i].classList.contains(animArr[1])) {
        stars[i].classList.remove(animArr[1]);
      } else if(stars[i].classList.contains(animArr[2])) {
        stars[i].classList.remove(animArr[2]);
      }
    }

    for(let i=0; i < starStr.length; i++) {
      if(starStr[i].classList.contains(animArr2[0])) {
        starStr[i].classList.remove(animArr2[0]);
      } else if(starStr[i].classList.contains(animArr2[1])) {
        starStr[i].classList.remove(animArr2[1]);
      } else if(starStr[i].classList.contains(animArr2[2])) {
        starStr[i].classList.remove(animArr2[2]);
      }
    }

    launchBtn.classList.add("btn--show");
    landBtn.classList.remove("btn--show");
  })

  function getRandArrInd(max = 3) {
    return Math.floor(Math.random() * max);
  }

})();
