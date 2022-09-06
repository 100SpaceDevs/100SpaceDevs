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

let falconv1_0IdImg = "5eb87ce3ffd86e000604b336";
let falcon1_1IdImg = "5eb87ce4ffd86e000604b337";
let falcon1_2IdImg = "";
let falconHeavyIdImg = "5eb87d2dffd86e000604b376";
let falconB5IdIdImg = "5eb87d28ffd86e000604b373";
// let falconImagesIdImg = [falconv1_0, falcon1_1];

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
      const falcon1Img = data[12].links.flickr.original[0];
      const falcon9Img = data[13].links.flickr.original[1];
      const falcon1_1 = "";
      const falcon1_2 = "";
      const falconB5 = data[73].links.flickr.original[1];
      const falconHeavy = data[76].links.flickr.original[2];
      launchPhoto.src = falcon1Img;
    });
  // console.log(data);
  // const launchPic = data.links.flickr.original[3];
  // console.log(launchPic);
  // launchPhoto.src = launchPic;
  // console.log("Response:", response);
  // fetchRocket();
}

async function fetchLaunch() {
  try {
    fetcher("");
    fetcher("5eb87ce4ffd86e000604b337");
    // const response = await fetch("https://api.spacexdata.com/v5/launches/", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     const falcon1Img = data[13].links.flickr.original[1];
    //     const falcon9Img = data[44].links.flickr.original[1];
    //     launchPhoto.src = falcon1Img;
    //   });
    // // console.log(data);
    // // const launchPic = data.links.flickr.original[3];
    // // console.log(launchPic);
    // // launchPhoto.src = launchPic;
    // // console.log("Response:", response);
    // fetchRocket();
  } catch (err) {
    console.log(err);
  }

  // .catch((err) => console.log(err));
}
fetchLaunch();

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
