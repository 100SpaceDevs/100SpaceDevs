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

async function fetcher(id) {
  let url = `https://api.spacexdata.com/v5/launches/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// fetchLaunch();

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
      const falcon9Description = data[0].description;
      rocketInfo.innerText = falcon9Description;
    })
    .catch((err) => console.log(err));
}
