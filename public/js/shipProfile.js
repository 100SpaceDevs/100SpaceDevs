// DOM Variables
const launchInfo = document.getElementById("launchInfo");
const rocketInfo = document.getElementById("rocketInfo");
const launchPhoto = document.querySelector(".launchPhoto");

// 1 photo and one launch stat for each Rocket
// Then 1 History on launch page
// let spaceXAPI = {
//   falcon1: {
//     id: "5e9d0d95eda69955f709d1eb", //data[13].links.flickr.original[1]
//     img:
//   },
//   falcon9v1: {
//     id: "",
//   },
//   falcon9v2: {
//     id: "",
//   },
// };

const falcon1IdImg = "5e9d0d95eda69955f709d1eb"; // from rocket endpoint
const falconv1_0IdImg = "";
const falcon1_1IdImg = "5eb87ce4ffd86e000604b337";
const falcon1_2IdImg = "";
const falconHeavyIdImg = "5eb87d2dffd86e000604b376";
const falconB5IdIdImg = "5eb87d28ffd86e000604b373";

async function fetcher(id) {
  let url = `https://api.spacexdata.com/v5/launches/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const falcon9Img = data[13].links.flickr.original[1];
      const falcon91_0Img = "";
      const falcon1_1Img = "";
      const falcon1_2Img = "";
      const falconB5Img = data[73].links.flickr.original[1];
      const falconHeavy = data[76].links.flickr.original[2];
    })
    .catch((err) => console.log(err));
}
// fetchLaunch();

const falcon1IdDesc = "5e9d0d95eda69955f709d1eb";
const falcon1_0Desc = "5e9d0d95eda69973a809d1ec";
const falcon91_1IdDesc = "";
const falcon1_2IdDesc = "";
const falconB5IdIdDesc = "";
const falconHeavyIdDesc = "5e9d0d95eda69974db09d1ed";

async function fetchRocket(id) {
  const response = await fetch("https://api.spacexdata.com/v4/rockets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const falcon1Img = data[0].flickr_images[0];
      const falcon1Desc = data[0].description;
      const falcon9v1_0Desc = "";
      const falcon9v1_1Desc = data[1].description;
      const falcon9v1_2Desc = "";
      const falcon9B5Desc = "";
      const falcon9HeavyDesc = data[2].description;
      rocketInfo.innerText = falcon1Desc;
      launchPhoto.src = falcon1Img;
    })
    .catch((err) => console.log(err));
}

fetchRocket();

async function fetchHistory() {
  const response = await fetch("https://api.spacexdata.com/v4/history", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

fetchHistory();
