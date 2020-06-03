const btn = document.querySelector("[data-btn-signup]");
const input = document.querySelectorAll("[required]");
const error = document.querySelectorAll("[data-error]");
const scheck = document.querySelector("[data-check-box]");
const check = document.querySelector("[data-check]");

btn.addEventListener("click", () => {
  input.forEach((el, index) => {
    if (el.value === "") {
      error[index].style.display = "block";
      el.style.borderColor = "#e22134";
    }
  });
});

input.forEach((el, index) => {
  el.addEventListener("keyup", () => {
    if (el.value === "") {
      error[index].style.display = "block";
      el.style.borderColor = "#e22134";
    } else {
      error[index].style.display = "none";
      el.style.borderColor = "rgb(189, 189, 189)";
    }
  });
});

scheck.addEventListener("click", () => {
  if (check.checked === false) {
    check.checked = true;
  } else {
    if (check.checked === true) {
      check.checked = false;
    }
  }
  scheck.classList.toggle("checkbox--selected");
});
