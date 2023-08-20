var form = document.getElementById("my-contact-form");
var formMessage = document.getElementById("form-message");
form.onsubmit = function(event) {
event.preventDefault();
var formData = new FormData(form);
var xhr = new XMLHttpRequest();
xhr.open("POST", form.action, true);
xhr.send(formData);
xhr.onload = function(e) {
if (xhr.status === 200) {
formMessage.innerHTML = "Successfully Submitted";
} else {
var response = JSON.parse(xhr.response);
formMessage.innerHTML = "Error: " + response.error;
}
};
};
//  Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 480px
    993: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
  });
