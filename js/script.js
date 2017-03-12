var link = document.querySelector(".main-nav__burger");
var menu = document.querySelector(".main-nav__items");
var close = document.querySelector(".main-nav__close");
// var close = document.querySelector(".main-nav__close");


    link.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("клик по ссылке");
      menu.classList.add("main-nav__items--view");
      link.classList.add("main-nav__burger--hidden");
      close.classList.add("main-nav__close--view");
    });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("клик по ссылке");
      menu.classList.remove("main-nav__items--view");
      link.classList.remove("main-nav__burger--hidden");
      close.classList.remove("main-nav__close--view");
    });

    // form.addEventListener("submit", function(event) {
    //
    //   if (popup.classList.contains("login-popup-error")) {
    //       popup.classList.remove("login-popup-error");
    //       console.log("удалить popup-error!");
    //   }
    //
    //   if (!login.value || !password.value) {
    //     event.preventDefault();
    //     console.log("Нужно ввести логин и или пароль");
    //     popup.classList.add("login-popup-error");
    //
    //   } else {
    //     localStorage.setItem("login", login.value);
    //   }
    // });
    //
    // close.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   //console.log("клик по сслке");
    //   popup.classList.remove("login-popup-view");
    //   popup.classList.remove("login-popup-error");
    // });
    //
    // maplink.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   //console.log("клик по сслке");
    //   mappopup.classList.add("map-popup-view");
    // });
    //
    // mapclose.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   //console.log("клик по сслке");
    //   mappopup.classList.remove("map-popup-view");
    // });
    //
    // window.addEventListener("keydown", function(event) {
    //   if (event.keyCode === 27) {
    //     if (popup.classList.contains("login-popup-view")) {
    //         popup.classList.remove("login-popup-view");
    //         popup.classList.remove("login-popup-error");
    //     }
    //   }
    // });
