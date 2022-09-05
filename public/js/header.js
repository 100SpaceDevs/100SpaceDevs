const logoutBtn = document.querySelector(".btn-logout");

logoutBtn.addEventListener("click", async function () {
  await fetch("/logout", {
    method: "POST",
    credentials: "include",
  });
  // .then((data) => data.json());
  //   .then((res) => {
  //     window.location.replace("/");
  //   });
});
