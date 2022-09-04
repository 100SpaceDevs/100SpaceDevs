(() => {
  const form = document.querySelector(".form-container");

  form.addEventListener("change", function (event) {
    const { name, value } = event.target;
    if (name === event.target.labels[0].htmlFor) {
      if (value.length !== 0) {
      }
    }
  });
})();
