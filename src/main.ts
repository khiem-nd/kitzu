import "./index.less";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

// const topMenu=document.getElementById('top-menu');
// const toggleTopMenuIcon=document.getElementById('top-toggle');
// document.addEventListener('click',(e)=>{
//   if(toggleTopMenuIcon?.contains(e.target)){

//     topMenu?.classList.toggle('tqp-topmenu-expended')
//     topMenu?.classList.toggle('hidden')
//   }
//   else{
//     if(topMenu?.classList.contains('tqp-topmenu-expended')){
//       topMenu.classList.remove('tqp-topmenu-expended')
//       topMenu.classList.add('hidden')
//     }
//   }
// })
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
