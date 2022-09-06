let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

// let prevArrow = document.querySelector(`.prev[data-prev="${190.keyCode}"`)
// let nextArrow = document.querySelector(`.next[data-next="${188.keyCode}"`)

function setShipType(n) {
  let ship = document.getElementById("shipTypeInput");
  let shipMap = {
    0: "Falcon9v1.1",
    1: "Falcon1",
    2: "Falcon9Block5",
    3: "FalconHeavy",
    4: "Falcon9v1.0",
    5: "Falcon9v1.2",
  };
  ship.value = shipMap[n];
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log(`n is`, n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log(slides[i]);
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  setShipType(n);
}

function detectArrows(e) {
  console.log(e);
  if (e.keyCode === 190) {
    console.log(`e is 190`);
    plusSlides(1);
  }
  if (e.keyCode === 188) {
    console.log(`e is 188`);
    plusSlides(-1);
  }
}
