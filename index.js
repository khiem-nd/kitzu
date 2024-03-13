// // Handlebars
// Home
const sourceHome = document.getElementById("handlebarsHome").innerHTML;
const templateHome = Handlebars.compile(sourceHome);
const dataHome = {
  button: [
    {
      name: "About",
      href: "about",
    },
    {
      name: "Resume",
      href: "resume",
    },
    {
      name: "Portfolio",
      href: "portfolio",
    },
    {
      name: "Blog",
      href: "blog",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ],
  languages: [
    {
      hreflanguage: "0",
      language: "ENG",
    },
    {
      hreflanguage: "0",
      language: "JAP",
    },
  ],
  media: [
    {
      hrefmedia: "0",
      svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="21.21"
            height="23"
            viewBox="0 0 50 50"
            fill="#fff">
            <path
            d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
          </svg>`,
    },
    {
      hrefmedia: "0",
      svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="21.21"
            height="23"
            viewBox="0 0 50 50"
            fill="#fff">
            <path
            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
          </svg>`,
    },
    {
      hrefmedia: "0",
      svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="21.21"
            height="23"
            viewBox="0 0 30 30"
            fill="#fff">
            <path
            d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
          </svg>`,
    },
    {
      hrefmedia: "0",
      svg: `<svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="21.21"
          height="23"
          viewBox="0 0 30 30"
          fill="#fff">
          <path
          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>`,
    },
    {
      hrefmedia: "0",
      svg: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="21.21"
                  height="23"
                  viewBox="0 0 30 30"
                  fill="#fff">
                  <path
                  d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>`,
    },
  ],
};
document.getElementById("handlebarsHome-output").innerHTML =
  templateHome(dataHome);
// About
const sourceAbout = document.getElementById("handleAbout").innerHTML;
const templateAbout = Handlebars.compile(sourceAbout);
const dataAbout = {
  services: [
    {
      icon: "logo-css3",
      name: "Design Trends",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      icon: "images",
      name: "PSD Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      icon: "logo-ionic",
      name: "Customer Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      icon: "logo-wordpress",
      name: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      icon: "move",
      name: "Fully Responsive",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      icon: "rocket-sharp",
      name: "Branding",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
  ],
  testimonials: [
    {
      img: "https://kaleidoscopic-pie-2341a3.netlify.app/template/img/client-2.jpg",
      name: "John Santana",
      customer: "Entrepreneur",
    },
    {
      img: "https://kaleidoscopic-pie-2341a3.netlify.app/template/img/client-3.jpg",
      name: "Maria Wilson",
      customer: "Envato Customer",
    },
    {
      img: "https://kaleidoscopic-pie-2341a3.netlify.app/template/img/client-1.jpg",
      name: "Julia Sakura",
      customer: "Envato Customer",
    },
  ],
  plan: [
    {
      img: "egg",
      package: "Standard",
      cost: "$19/month",
    },
    {
      img: "rocket-sharp",
      package: "Professional",
      cost: "$29/month",
    },
    {
      img: "logo-ionic",
      package: "Business",
      cost: "$39/month",
    },
  ],
  media: [
    {
      icon: "logo-twitter",
    },
    {
      icon: "logo-instagram",
    },
    {
      icon: "logo-linkedin",
    },
    {
      icon: "logo-github",
    },
    {
      icon: "logo-facebook",
    },
  ],
};
document.getElementById("handleAbout-output").innerHTML =
  templateAbout(dataAbout);
// Resume
const sourceResume = document.getElementById("handleResume").innerHTML;
const templateResume = Handlebars.compile(sourceResume);
const dataResume = {
  education: [
    {
      degree: "Computer Science",
      university: "Cambridge University",
      year: "2004-2007",
    },
    {
      degree: "Bachelor Degree",
      university: "University of Tokyo",
      year: "2008-2010",
    },
    {
      degree: "Master Degree",
      university: "Harvard University",
      year: "2012-2015",
    },
  ],
  experience: [
    {
      position: "Software Engineer",
      org: "Adobe",
      year: "2015 - 2017",
    },
    {
      position: "Back-End Developer",
      org: "Google",
      year: "2017 - 2018",
    },
    {
      position: "UI/UX Designer",
      org: "Discord",
      year: "2019 - Present",
    },
  ],
  knowledge: [
    {
      skills: [
        {
          language: "HTML/CSS",
          percentage: "95%",
        },
        {
          language: "Web Design",
          percentage: "80%",
        },
        {
          language: "JavaScript",
          percentage: "90%",
        },
      ],
    },
    {
      skills: [
        {
          language: "React JS",
          percentage: "90%",
        },
        {
          language: "Express.js",
          percentage: "95%",
        },
        {
          language: "TypeScript",
          percentage: "80%",
        },
      ],
    },
  ],
};
document.getElementById("handleResume-output").innerHTML =
  templateResume(dataResume);

// Portfolio
const sourcePortfolio = document.getElementById(
  "handlebarsPortfolio"
).innerHTML;
const templatePortfolio = Handlebars.compile(sourcePortfolio);
const dataPortfolio = {
  filterButton: [
    {
      dataFilter: "*",
      nameFilter: "All",
    },
    {
      dataFilter: "brand",
      nameFilter: "Brand",
    },
    {
      dataFilter: "design",
      nameFilter: "Design",
    },
    {
      dataFilter: "photos",
      nameFilter: "Photos",
    },
  ],
  portfolioItem: [
    {
      filterGroup: "design",
      srcImg: "src/img/item-1.jpg",
      altImg: "Item",
      nameImg: "Label Tag Mockup",
    },
    {
      filterGroup: "photos",
      srcImg: "src/img/item-2.jpg",
      altImg: "Item",
      nameImg: "3D Bag Mockup",
    },
    {
      filterGroup: "design",
      srcImg: "src/img/item-3.jpg",
      altImg: "Item",
      nameImg: "Modern Bag Design",
    },
    {
      filterGroup: "brand",
      srcImg: "src/img/item-4.jpg",
      altImg: "Item",
      nameImg: "Coffee Cup Design",
    },
    {
      filterGroup: "brand",
      srcImg: "src/img/item-5.jpg",
      altImg: "Item",
      nameImg: "T-Shirt Design",
    },
    {
      filterGroup: "photos",
      srcImg: "src/img/item-6.jpg",
      altImg: "Item",
      nameImg: "Packaging Box Mockup",
    },
  ],
};
document.getElementById("handlebarsPortfolio-output").innerHTML =
  templatePortfolio(dataPortfolio);
// Blog
const sourceBlog = document.getElementById("handlebarsBlog").innerHTML;
const templateBlog = Handlebars.compile(sourceBlog);
const dataBlog = {
  postBlog: [
    {
      srcImg: "src/img/postblog-1.jpg",
      altImg: "Blog post",
      href: "",
      date: "11 Dec, 20",
      title: "Top tools for Photographers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id,repellendus magni, quas.",
    },
    {
      srcImg: "src/img/postblog-2.jpg",
      altImg: "Blog post",
      href: "",
      date: "12 Aug, 20",
      title: "Take a tour of my office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id,repellendus magni, quas.",
    },
    {
      srcImg: "src/img/postblog-3.jpg",
      altImg: "Blog post",
      href: "",
      date: "4 Feb, 20",
      title: "How i became a Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id,repellendus magni, quas.",
    },
    {
      srcImg: "src/img/postblog-4.jpg",
      altImg: "Blog post",
      href: "",
      date: "11 Dec, 19",
      title: "How to improve work performance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id,repellendus magni, quas.",
    },
    {
      srcImg: "src/img/postblog-5.jpg",
      altImg: "Blog post",
      href: "",
      date: "15 Nov, 19",
      title: "How to work from home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id,repellendus magni, quas.",
    },
    {
      srcImg: "src/img/postblog-6.jpg",
      altImg: "Blog post",
      href: "",
      date: "8 Aug, 19",
      title: "How to enjoy your business trip",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id,repellendus magni, quas.",
    },
  ],
};
document.getElementById("handlebarsBlog-output").innerHTML =
  templateBlog(dataBlog);
// Contact
const sourceContact = document.getElementById("handlebarsContact").innerHTML;
const templateContact = Handlebars.compile(sourceContact);
const dataContact = {
  contactInfo: [
    {
      nameLogo: "logo-ionic",
      nameField: "Name",
      valueField: "Emma Smith",
      stype: "pt-0",
    },
    {
      nameLogo: "map-sharp",
      nameField: "Location",
      valueField: "4155 Mann Island, Liverpool, United Kingdom.",
      stype: "",
    },
    {
      nameLogo: "call",
      nameField: "Call Me",
      valueField: "+44 1632 967704",
      stype: "",
    },
    {
      nameLogo: "send-sharp",
      nameField: "Email Me",
      valueField: "emma@example.com",
      stype: "pb-0",
    },
  ],
  message: [
    {
      typeInput: "input",
      stypeDiv: "",
      stypeInput: "max-h-11",
      placeholder: "Name",
      rows: "",
      required: "required",
    },
    {
      typeInput: "input",
      stypeDiv: "",
      stypeInput: "max-h-11",
      placeholder: "Email",
      rows: "",
      required: "required",
    },
    {
      typeInput: "input",
      stypeDiv: "md:col-span-2",
      stypeInput: "max-h-11",
      placeholder: "Suject",
      rows: "",
      required: "required",
    },
    {
      typeInput: "textarea",
      stypeDiv: "md:col-span-2",
      stypeInput: "",
      placeholder: "Name",
      rows: "4",
      required: "required",
    },
  ],
};
document.getElementById("handlebarsContact-output").innerHTML =
  templateContact(dataContact);

const topMenu = document.getElementById("top-menu");
const toggleTopMenuIcon = document.getElementById("top-toggle");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon?.contains(e.target)) {
    topMenu?.classList.toggle("tqp-topmenu-expended");
    topMenu?.classList.toggle("hidden");
  }
});

const phrases = ["Developer", "Designer", "Freelancer"];
const el = document.getElementById("typewriter");

let sleepTime = 50; // Giảm thời gian chờ

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.textContent = curWord.substring(0, i + 1); // Sử dụng textContent thay vì innerText
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.textContent = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Portfolio
$(".grid-custom").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

$(document).ready(function () {
  setTimeout(() => {
    $(".filter-group").find("li").get(0).click();
  }, 1500);
});

$(".filter-group").on("click", "li", function () {
  $(".filter-button")
    .removeClass("text-green-600 border-b-green-600")
    .addClass("border-b-neutral-900");
  $(this)
    .addClass("text-green-600 border-b-green-600")
    .removeClass("border-b-neutral-900");
  var filterValue = $(this).attr("data-filter") || "*";
  filterValue = filterValue == "*" ? filterValue : "." + filterValue;
  $(".grid-custom").isotope({ filter: filterValue });
});

$(".portfolio-item").on("click", function (e) {
  e.preventDefault();
  var imgElement = $(this).find("img").get(0).src;
  document.body.style.overflow = "hidden";
  $(".img-item").get(0).src = imgElement;
  $(".container-item").removeClass("hidden");
  $(".container-item").css("z-index", "9999");
  $(".img-item").removeClass("animate-zoom-out-img");
  $(".img-item").addClass("animate-zoom-in-img");
});

$("#close-zoom-img").on("click", function () {
  closeZoomImg();
});

const closeZoomImg = () => {
  $(".img-item").removeClass("animate-zoom-in-img");
  $(".img-item").addClass("animate-zoom-out-img");
  setTimeout(() => {
    $(".container-item").addClass("hidden");
    document.body.style.overflow = "auto";
  }, 100);
};

// Swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      enabled: true,
      slidesPerView: 1,
    },
    // when window width is >= 768
    768: {
      enabled: true,
      slidesPerView: 2,
    },
  },
  pagination: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// animated modal

(function ($) {
  $.fn.animatedModal = function (options) {
    var modal = $(this);

    //Defaults
    var settings = $.extend(
      {
        modalTarget: modal.attr("href").replace("#", ""),
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndexIn: "9999",
        zIndexOut: "-9999",
        color:
          modal.attr("href").replace("#", "") == "overlay"
            ? "#181818"
            : "#101010",
        opacityIn: "1",
        opacityOut: "0",
        animatedIn: "slideInUp",
        animatedOut: "slideOutDown",
        animationDuration: "0.5s",
        animationDelayIn:
          modal.attr("href").replace("#", "") == "overlay" ? "0s" : "0.5s",
        animationDelayOut:
          modal.attr("href").replace("#", "") == "overlay" ? "0.5s" : "0s",
        overflow: "auto",
        // Callbacks
        beforeOpen: function () {},
        afterOpen: function () {},
        beforeClose: function () {},
        afterClose: function () {},
      },
      options
    );

    var closeBt = $(".close-" + settings.modalTarget);

    var href = $(modal).attr("href"),
      id = $("body").find("#" + settings.modalTarget),
      idConc = "#" + id.attr("id");
    // Default Classes
    id.addClass("animated");
    id.addClass(settings.modalTarget + "-off");

    //Init styles
    var initStyles = {
      position: settings.position,
      width: settings.width,
      height: settings.height,
      top: settings.top,
      left: settings.left,
      "background-color": settings.color,
      "overflow-y": settings.overflow,
      "z-index": settings.zIndexOut,
      opacity: settings.opacityOut,
      "-webkit-animation-duration": settings.animationDuration,
      "-moz-animation-duration": settings.animationDuration,
      "-ms-animation-duration": settings.animationDuration,
      "animation-duration": settings.animationDuration,
      "animation-delay": settings.animationDelay,
    };
    //Apply stles
    id.css(initStyles);

    modal.click(function (event) {
      event.preventDefault();
      $("body, html").css({ overflow: "hidden" });
      if (href == idConc) {
        if (id.hasClass(settings.modalTarget + "-off")) {
          id.removeClass(settings.animatedOut);
          id.removeClass(settings.modalTarget + "-off");
          id.addClass(settings.modalTarget + "-on");
        }

        if (id.hasClass(settings.modalTarget + "-on")) {
          settings.beforeOpen();
          id.css({
            opacity: settings.opacityIn,
            "z-index": settings.zIndexIn,
            animationDelay: settings.animationDelayIn,
          });
          id.addClass(settings.animatedIn);
          id.one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            afterOpen
          );
        }
      }
    });

    closeBt.click(function (event) {
      event.preventDefault();
      $(".close-overlay").get(0).click();
      $("body, html").css({ overflow: "auto" });

      settings.beforeClose(); //beforeClose
      if (id.hasClass(settings.modalTarget + "-on")) {
        id.removeClass(settings.modalTarget + "-on");
        id.addClass(settings.modalTarget + "-off");
      }

      if (id.hasClass(settings.modalTarget + "-off")) {
        id.css({ animationDelay: settings.animationDelayOut });
        id.removeClass(settings.animatedIn);
        id.addClass(settings.animatedOut);
        id.one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          afterClose
        );
      }
    });

    function afterClose() {
      id.css({ "z-index": settings.zIndexOut });
      settings.afterClose(); //afterClose
    }

    function afterOpen() {
      settings.afterOpen(); //afterOpen
    }
  };
})(jQuery);

$("#modalOverlay").animatedModal();

$("#modalAbout").animatedModal();

$("#modalResume").animatedModal();

$("#modalPortfolio").animatedModal();

$("#modalBlog").animatedModal();

$("#modalContact").animatedModal();

// Lazyload
setTimeout(() => {
  new LazyLoad({
    callback_error: (el) => (el.src = "https://via.placeholder.com/1x1/?text="),
  });
}, 1000);
