// For the sticky navigation logo //
const frameImgDogs = document.querySelector(".frame-img-dogs");
const frameImgCats = document.querySelector(".frame-img-cats");
const buttonDogs = document.querySelector(".more-dogs");
const buttonCats = document.querySelector(".more-cats");
const auth = config.MICKEY;

$(document).ready(function () {
  $(".js--section-dogs").waypoint(
    function (direction) {
      // if (direction == "down") {
      //     $('nav').addClass('sticky');
      // } else {
      //     $('nav').removeClass('sticky');
      // }
    },
    {
      offset: "2px;",
    }
  );

  // Buttons //

  $(".js--scroll-to-dogs").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-dogs").offset().top },
      1000
    );
  });

  $(".js--scroll-to-cats").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-cats").offset().top },
      1000
    );
  });

  // $('.js--scroll-to-features').click(function () {
  //     $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  // });

  $(".more-cats-goto").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-cats").offset().top },
      1000
    );
  });

  $(".more-dogs-goto").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-dogs").offset().top },
      1000
    );
  });

  buttonDogs.addEventListener("click", () => {
    fetch("https://random.dog/woof.json")
      .then((result) => result.json())
      .then((data) => {
        if (data.url.includes(".mp4" || ".webm")) {
          frameImgDogs.innerHTML = `<video controls autoplay loop muted src=${data.url} type="video/mp4" class="dog-img"></video>`;
        } else {
          frameImgDogs.innerHTML = `<img src=${data.url} class="dog-img"></img>`;
        }
      });
  });

  buttonCats.addEventListener("click", () => {
    async function getCats() {
      const dataFecth = await fetch(
        "https://api.thecatapi.com/v1/images/search",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: auth,
          },
        }
      );
      const data = await dataFecth.json();
      frameImgCats.innerHTML = `<img src=${data[0].url} class="cat-img"></img>`;
    }
    getCats();
  });

  // Nav bar scroll //
  // $(function() {
  //     $('a[href*=#]:not([href=#])').click(function() {
  //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //             if (target.length) {
  //                 $('html,body').animate({
  //                     scrollTop: target.offset().top
  //                 }, 1000);
  //                 return false;
  //             }
  //         }
  //     });
  // });

  // MOBILE NAV //
  // $('.js--nav-icon').click(function() {
  //     var nav = $('.js--main-nav');
  //     var icon = $('.js--nav-icon i');

  //     nav.slideToggle(200);

  //     if (icon.hasClass('ion-navicon-round')) {
  //         icon.addClass('ion-close-round');
  //         icon.removeClass('ion-navicon-round');
  //     } else {
  //         icon.addClass('ion-navicon-round');
  //         icon.removeClass('ion-close-round');
  //     }
  // });
});
