let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

// let prevArrow = document.querySelector(`.prev[data-prev="${190.keyCode}"`)
// let nextArrow = document.querySelector(`.next[data-next="${188.keyCode}"`)

function setShipType(slideIndex) {
  const rocketInfo = document.getElementById("rocketInfo");
  const launchPhoto = document.querySelector(".launchPhoto");
  let ship = document.getElementById("shipTypeInput");

  let shipInfo = {
    1: [
      "Falcon1",
      "Falcon 1 was a small-lift launch vehicle that was operated from 2006 to 2009 by SpaceX, an American aerospace manufacturer. On 28 September 2008, Falcon 1 became the first privately-developed fully liquid-fueled launch vehicle to go into orbit around the Earth",
      "img/rocketPhotos/Falcon1.jpg",
    ],
    2: [
      "Falcon9Block5",
      "Falcon 9 Block 5 is a partially reusable two-stage-to-orbit medium-lift launch vehicle designed and manufactured in the United States by SpaceX. It is the fifth version of Falcon 9 Full Thrust,powered by SpaceX Merlin engines burning rocket-grade kerosene (RP-1) and liquid oxygen (LOX).",
      "img/rocketPhotos/Falcon9Block5.jpg",
    ],
    3: [
      "FalconHeavy",
      "Falcon Heavy is a partially reusable heavy-lift launch vehicle that is produced by SpaceX, an American aerospace manufacturer. The rocket consists of two strap-on boosters made from Falcon 9 first stages, a center core also made from a Falcon 9 first stage, and a second stage on top. Falcon Heavy has the highest payload capacity of any currently operational launch vehicle and the third-highest capacity of any rocket ever to reach orbit, trailing the Saturn V and Energia.",
      "img/rocketPhotos/FalconHeavy.jpg",
    ],
    4: [
      "Falcon9v1.0",
      "The Falcon 9 v1.0 was the first member of the Falcon 9 launch vehicle family, designed and manufactured by SpaceX in Hawthorne, California. Development of the medium-lift launcher began in 2005, and it first flew on June 4, 2010. The Falcon 9 v1.0 then launched four Dragon cargo spacecraft: one on an orbital test flight, then one demonstration and two operational resupply missions to the International Space Station under a Commercial Resupply Services contract with NASA.",
      "img/rocketPhotos/Falcon9v1_0.jpg",
    ],
    5: [
      "Falcon9v1.2",
      "Falcon 9 Full Thrust (also known as Falcon 9 v1.2, with variants Block 1 to Block 5) is a partially reusable medium-lift launch vehicle, designed and manufactured by SpaceX. Designed in 2014-2015, Falcon 9 Full Thrust began launch operations in December 2015. As of 11 September 2022, Falcon 9 Full Thrust had performed 155 launches without any failures. Based on the Lewis point estimate of reliability,[definition needed] this rocket is the most reliable orbital launch vehicle currently in operation.",
      "img/rocketPhotos/Falcon9v1_2.jpg",
    ],
    6: [
      "Falcon9v1.1",
      "Falcon 9 v1.1 was the second version of SpaceX's Falcon 9 orbital launch vehicle. The rocket was developed in 2011-2013, made its maiden launch in September 2013, and its final flight in January 2016. The Falcon 9 rocket was fully designed, manufactured, and operated by SpaceX. Following the second Commercial Resupply Services (CRS) launch, the initial version Falcon 9 v1.0 was retired from use and replaced by the v1.1 version.",
      "img/rocketPhotos/Falcon9v1_1.jpg",
    ],
  };
  ship.value = shipInfo[slideIndex][0];
  rocketInfo.innerText = shipInfo[slideIndex][1];
  launchPhoto.src = shipInfo[slideIndex][2];
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  // console.log(`n is`, n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // console.log(slides);
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
  // console.log("slide index is: ", slideIndex);
  setShipType(slideIndex);
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
