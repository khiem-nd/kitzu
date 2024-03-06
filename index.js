const topMenu = document.getElementById("top-menu");
const toggleTopMenuIcon = document.getElementById("top-toggle");

// const removeExpendClass = () => {
//   if (topMenu.classList.contains("tqp-topmenu-expended")) {
//     topMenu.classList.remove("tqp-topmenu-expended");
//     topMenu.classList.add("hidden");
//   }
// };

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon?.contains(e.target)) {
    topMenu?.classList.toggle("tqp-topmenu-expended");
    topMenu?.classList.toggle("hidden");
  } else {
    removeExpendClass();
  }
});

// Xóa lớp 'tqp-topmenu-expended' khi màn hình có kích thước từ md trở lên
// const mediaQuery = window.matchMedia("(min-width: 768px)");

// const handleMediaQueryChange = (e) => {
//   if (e.matches) {
//     removeExpendClass();
//   }
// };

// mediaQuery.addListener(handleMediaQueryChange);
// handleMediaQueryChange(mediaQuery);
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
  $(".filter-group").find("li").get(0).click();
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

      //   // Dữ liệu về các nhân vật
      //   var cast = {
      //     "characters": [
      //         {
      //             "icon": "logo-css3",
      //             "name": "Design Trends",
      //             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                 
      //         },
      //         {
      //             "icon": "images",
      //             "name": " PSD Design",
      //             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                 
      //         },
      //         {
      //             "icon": "logo-ionic",
      //             "name": "Customer Support",
      //             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                 
      //         },
      //         {
      //             "icon": "logo-wordpress",
      //             "name": "Web Development",
      //             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                 
      //         },
      //         {
      //             "icon": "move",
      //             "name": " Fully Responsive",
      //             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                 
      //         },
      //         {
      //             "icon": "rocket-sharp",
      //             "name": "Branding",
      //             "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                 
      //         },
              
      //     ]
      // }
      
      // $(document).ready(function(){
      //     // Lấy mẫu HTML của nhân vật
      //     var characterTemplate = $("#character-template").html();
      
      //     // Biên dịch mẫu Handlebars
      //     var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
      
      //     // Hiển thị dữ liệu của một nhân vật vào phần tử .character-list-container
      //     $(".character-list-container").html(compiledCharacterTemplate(cast.characters[2]));
      // });