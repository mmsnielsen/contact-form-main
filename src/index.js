const form = document.querySelector(".contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const userDetails = document.querySelectorAll(".user-details");
  userDetails.forEach((detail) => {
    const input = detail.querySelector("input, textarea");
    if (!input.value.trim()) {
      detail.classList.add("error");
      isValid = false;
    } else {
      detail.classList.remove("error");
    }
  });

  const radioGroup = document.querySelector(".radio-group");
  const radios = document.getElementsByName("query-type");
  let radioSelected = false;
  radios.forEach((radio) => {
    if (radio.checked) radioSelected = true;
  });
  if (!radioSelected) {
    radioGroup.classList.add("error");
    isValid = false;
  } else {
    radioGroup.classList.remove("error");
  }

  const consentGroup = document.querySelector(".consent-group");
  const checkbox = document.getElementById("consent");
  if (!checkbox.checked) {
    consentGroup.classList.add("error");
    isValid = false;
  } else {
    consentGroup.classList.remove("error");
  }

  if (isValid) {
    successMessage.classList.add("show");
    form.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);
  }

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      input.parentElement.classList.remove("error");
      if (input.type === "radio") radioGroup.classList.remove("error");
    });
  });
});
