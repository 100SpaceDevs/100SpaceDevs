// DOM Variables
const launchInfo = document.getElementById("launchInfo");
const rocketInfo = document.getElementById("rocketInfo");
const launchPhoto = document.querySelector(".launchPhoto");

let spaceXAPI = {
  falcon1: {
    id: "#",
  },
};

async function fetchLaunch() {
  const response = await fetch("https://api.spacexdata.com/v5/launches", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
fetchLaunch();

async function fetchRocket() {
  const response = await fetch("https://api.spacexdata.com/v4/rockets/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
fetchRocket();
