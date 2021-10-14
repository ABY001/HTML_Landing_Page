/*==================== SHOW MENU ====================*/
const modal = document.getElementById("register");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function enableLogin() {
  const enableBtn = document.getElementById("my-check");
  // When we click on each nav__link, we remove the show-menu class

  const login = document.getElementById("login");

  // If the checkbox is checked, display the output text
  enableBtn.checked == true
    ? (login.disabled = false)
    : (login.disabled = true);
}

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const logoImage = document.getElementById("logo__switch");
const logoImage2 = document.getElementById("logo__switch2");
const darkTheme = "dark-theme";
const iconTheme = "bx-moon";
const logoTheme = "logo__dark";
const logoTheme2 = "logo__light";

// Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const selectedLogo = localStorage.getItem("selected-logo");
const selectedLogo2 = localStorage.getItem("selected-logo2");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bx-moon";
const getCurrentLogo = () =>
  logoImage.classList.contains(logoTheme) ? "logo__light" : "logo__dark";
const getCurrentLogo2 = () =>
  logoImage2.classList.contains(logoTheme2) ? "logo__dark" : "logo__light";

// Switch Logo
let lightLogo = document.getElementById("logo__switch");
let darkLogo = document.getElementById("logo__switch2");

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  if (selectedTheme === "dark") {
    logoImage.classList.remove("logo__dark");
    logoImage.classList.add("logo__light");
    logoImage2.classList.remove("logo__light");
    logoImage2.classList.add("logo__dark");
    // console.log("DARK");
  } else {
    logoImage.classList.remove("logo__light");
    logoImage.classList.add("logo__dark");
    logoImage2.classList.remove("logo__dark");
    logoImage2.classList.add("logo__light");
    // console.log("LIGHT");
  }

  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  logoImage.classList.toggle(logoTheme);
  logoImage2.classList.toggle(logoTheme2);
  logoImage2.classList.add("logo__dark");

  if (getCurrentTheme() === "light") {
    logoImage.classList.remove("logo__light");
    logoImage.classList.add("logo__dark");
    logoImage2.classList.remove("logo__dark");
    logoImage2.classList.add("logo__light");
    // console.log("D => L");
  }

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  localStorage.setItem("selected-logo", getCurrentLogo());
  localStorage.setItem("selected-logo2", getCurrentLogo2());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(`.create__img, .share__img, .order__data, .send__content`, {
  origin: "left",
});

sr.reveal(`.share__data, .order__img, .order__data .send__img`, {
  origin: "right",
});

/*======================== SIGNUP POPUP ======================*/
// Check for valid email syntax
function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function closeForm() {
  document.contactform.uname.value = "";
  document.contactform.gender.value = "";
  document.contactform.email.value = "";
  document.contactform.location.value = "";
  document.contactform.phone.value = "";
  document.contactform.phone.value = "";
  document.contactform.psw.value = "";
  document.contactform.psw2.value = "";
  document.getElementById("my-check").checked = false;
  document.getElementById("register").style.display = "none";
  document.getElementById("login").disabled = true;
}

function closeNotification() {
  const not = document.getElementById("alert");
  not.classList.remove("is-visible");
}

signUpRequest = async () => {
  // var url = "https://htmlfood.herokuapp.com/api/v1/user";
  var url = "https://backend.htmlfoods.org/api/v1/user";
  var name = document.getElementById("uname").value;
  var gender = document.getElementById("gender").value;
  var location = document.getElementById("location").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("psw").value;

  const parameters = {
    fullname: name,
    password: password,
    email: email,
    phonenumber: phone,
    gender: gender,
    location: location,
  };

  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameters),
  };

  try {
    // document.getElementById("unloading").style.display = "none";
    // document.getElementById("loading").style.display = "block";
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    // console.log(data);
    if (data) {
      if (data.status == "OK") {
        document.contactform.uname.value = "";
        document.contactform.gender.value = "";
        document.contactform.email.value = "";
        document.contactform.location.value = "";
        document.contactform.phone.value = "";
        document.contactform.phone.value = "";
        document.contactform.psw.value = "";
        document.contactform.psw2.value = "";
        document.getElementById("my-check").checked = false;
        document.getElementById("register").style.display = "none";
        document.getElementById("login").disabled = true;
        $("#notification-text").html(
          "<strong>You can now proceed to login in your mobile app.<br/>Thanks for getting in touch!</h3></strong>"
        );
        $(".notification").addClass("is-visible");
        return data;
      } else {
        $("#notification-text").html("<strong>" + data.message + "</strong>");
        $(".notification").addClass("is-visible");
      }
      document.getElementById("loading").style.display = "none";
      document.getElementById("unloading").style.display = "block";
    } else {
      document.getElementById("loading").style.display = "none";
      document.getElementById("unloading").style.display = "block";
      return;
    }
  } catch (e) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("unloading").style.display = "block";
    return e;
  }
};

function submitForm() {
  var name = document.getElementById("uname").value;
  var gender = document.getElementById("gender").value;
  var location = document.getElementById("location").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("psw").value;
  var password2 = document.getElementById("psw2").value;

  if (validateEmail(email)) {
    if (name) {
      if (phone) {
        if (gender) {
          if (location) {
            if (password) {
              if (password2) {
                if (password === password2) {
                  document.getElementById("loading").style.display = "block";
                  document.getElementById("unloading").style.display = "none";
                  signUpRequest();
                } else {
                  $("#notification-text").html(
                    "<strong>Please make sure your password match!</strong>"
                  );
                  $(".notification").addClass("is-visible");
                }
              } else {
                $("#notification-text").html(
                  "<strong>Please confirm your password!</strong>"
                );
                $(".notification").addClass("is-visible");
              }
            } else {
              $("#notification-text").html(
                "<strong>Please input your password!</strong>"
              );
              $(".notification").addClass("is-visible");
            }
          } else {
            $("#notification-text").html(
              "<strong>Please select your location!</strong>"
            );
            $(".notification").addClass("is-visible");
          }
        } else {
          $("#notification-text").html(
            "<strong>Please select your gender.</strong>"
          );
          $(".notification").addClass("is-visible");
        }
      } else {
        $("#notification-text").html(
          "<strong>Please provide your phone number.</strong>"
        );
        $(".notification").addClass("is-visible");
      }
    } else {
      $("#notification-text").html("<strong>Please provide a name.</strong>");
      $(".notification").addClass("is-visible");
    }
  } else {
    $("#notification-text").html(
      "<strong>Please use a valid email address.</strong>"
    );
    $(".notification").addClass("is-visible");
  }
  // $(".notification").addClass("is-visible");
  return false;
}
