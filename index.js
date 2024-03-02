const topMenu = document.getElementById("top-menu");
const toggleTopMenuIcon = document.getElementById("top-toggle");

const removeExpendClass = () => {
  if (topMenu.classList.contains("tqp-topmenu-expended")) {
    topMenu.classList.remove("tqp-topmenu-expended");
    topMenu.classList.add("hidden");
  }
};

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon?.contains(e.target)) {
    topMenu?.classList.toggle("tqp-topmenu-expended");
    topMenu?.classList.toggle("hidden");
  } else {
    removeExpendClass();
  }
});

// Xóa lớp 'tqp-topmenu-expended' khi màn hình có kích thước từ md trở lên
const mediaQuery = window.matchMedia("(min-width: 768px)");

const handleMediaQueryChange = (e) => {
  if (e.matches) {
    removeExpendClass();
  }
};

mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
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
