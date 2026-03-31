const form = document.querySelector(".contact-form");
const sentPopup = document.getElementById("sent-popup");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const userDetails = document.querySelectorAll(".user-details");
  userDetails.forEach((detail) => {
    const input = detail.querySelector("input, textarea");

    const emailField = input.id === "email";
    const isEmpty = !input.value.trim();
    const isInvalidEmail = emailField && !validateEmail(input.value);

    if (isEmpty || isInvalidEmail) {
      detail.classList.add("error");
      isValid = false;
    } else {
      detail.classList.remove("error");
    }
  });

  const radioGroup = document.querySelector(".radio-group");
  const radioSelected = Array.from(
    document.getElementsByName("query-type"),
  ).some((radio) => radio.checked);

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
    sentPopup.classList.add("show");
    form.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      sentPopup.classList.remove("show");
    }, 4000);
  }
});

form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", () => {
    const parent = input.closest(".user-details, .radio-group, .consent-group");
    if (parent) parent.classList.remove("error");
  });
});
