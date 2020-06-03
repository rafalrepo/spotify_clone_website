const regex = {
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const radio = document.querySelectorAll("[data-gender]");
const sradio = document.querySelectorAll("[data-gender-box]");

const check = document.querySelectorAll("[data-check]");
const scheck = document.querySelectorAll("[data-check-box]");

const form = document.querySelector("[data-form]");
const btnReg = document.querySelector("[data-btn-registration]");
const error = document.querySelectorAll("[data-error]");
const errorEmaildif = document.querySelector("[data-error-email-dif]");
const errorEmail = document.querySelector("[data-error-email]");
const required = document.querySelectorAll("[required]");

scheck.forEach((el, index) => {
  el.addEventListener("click", () => {
    if (check[index].checked === false) {
      check[index].checked = true;
      error[8].style.display = "none";
    } else {
      if (check[index].checked === true) {
        check[index].checked = false;
        error[8].style.display = "block";
      }
    }

    scheck[index].classList.toggle("checkbox--selected");
  });
});

required.forEach((el, index) => {
  el.addEventListener("keyup", () => {
    if (el.value === "") {
      error[index].style.display = "block";
      el.style.boxShadow = "0 0 2px #e22134";
    } else {
      error[index].style.display = "none";
      el.style.boxShadow = "0 0 2px rgb(189, 189, 189)";
    }
  });
});

required[5].addEventListener("change", () => {
  if (required[5].value === "") {
    error[5].style.display = "block";
    required[5].style.boxShadow = "0 0 2px #e22134";
  } else {
    error[5].style.display = "none";
    required[5].style.boxShadow = "0 0 2px rgb(189, 189, 189)";
  }
});

required[0].addEventListener("keyup", () => {
  emailValidation(required[0]);
});

required[1].addEventListener("keyup", () => {
  emailVerification(required[0], required[1]);
});

btnReg.addEventListener("click", () => {
  var flag = true;
  var t = 0;

  required.forEach((el, index) => {
    if (el.value === "") {
      error[index].style.display = "block";
      el.style.boxShadow = "0 0 2px #e22134";
      flag = false;
    } else {
      error[index].style.display = "none";
      el.style.boxShadow = "0 0 2px rgb(189, 189, 189)";
    }

    if (el.type === "checkbox" && el.checked === false) {
      error[8].style.display = "block";
      scheck[2].style.borderColor = "#e22134";
      flag = false;
    }
  });

  for (let i = 0; i < radio.length; i++) {
    if (!radio[i].checked) {
      t++;
    }
    if (t === 3) {
      error[7].style.display = "block";
      sradio.forEach((el) => {
        el.style.borderColor = "#e22134";
      });
      flag = false;
    }
  }

  if (required[0].value !== "") {
    if (!emailValidation(required[0])) {
      flag = false;
    }
  }

  if (!emailVerification(required[0], required[1])) {
    flag = false;
  }

  if (flag) {
    form.submit();
  }
});

sradio.forEach((el, index) => {
  el.addEventListener("click", () => {
    sradio.forEach((e) => {
      e.classList.remove("radio--selected");
      e.style.borderColor = "rgb(189, 189, 189)";
      error[7].style.display = "none";
    });
    radio[index].checked = true;
    sradio[index].classList.add("radio--selected");
  });
});

function emailVerification(email, email2) {
  if (email.value !== email2.value) {
    errorEmaildif.style.display = "block";
    email2.style.boxShadow = "0 0 2px #e22134";
    return false;
  } else {
    errorEmaildif.style.display = "none";
    email2.style.boxShadow = "0 0 2px rgb(189, 189, 189)";
    return true;
  }
}

function emailValidation(email) {
  if (!regex.email.test(email.value)) {
    errorEmail.style.display = "block";
    email.style.boxShadow = "0 0 2px #e22134";
  } else {
    errorEmail.style.display = "none";
    email.style.boxShadow = "0 0 2px rgb(189, 189, 189)";
  }
}

const btnFB = document.querySelector("[data-btn-registration-fb]");
const scheckfb = document.querySelector("[data-check-box-fb]");
const checkfb = document.querySelector("[data-check-fb]");
const errorfb = document.querySelector("[data-error-fb]");

btnFB.addEventListener("click", () => {
  if (!checkfb.checked) {
    errorfb.style.display = "block";
  }
});

scheckfb.addEventListener("click", () => {
  if (checkfb.checked === false) {
    checkfb.checked = true;
    errorfb.style.display = "none";
  } else {
    if (checkfb.checked === true) {
      checkfb.checked = false;
      errorfb.style.display = "block";
    }
  }

  scheckfb.classList.toggle("checkbox--selected");
});
