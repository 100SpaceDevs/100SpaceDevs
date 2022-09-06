(() => {
  const form = document.querySelector(".form-container");

  form.addEventListener("change", function (event) {
    const { name, value } = event.target;
    if (name === event.target.labels[0].htmlFor) {
      if (value.length !== 0) {
        event.target.labels[0].classList.add("acc-input__label--value");
        event.target.classList.add("acc-input--value");
      } else {
        event.target.labels[0].classList.remove("acc-input__label--value");
        event.target.classList.remove("acc-input--value");
      }
    }
  });
})();
