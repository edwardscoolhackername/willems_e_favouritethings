import { getData } from "./components/TheDataMiner.js";
import { close } from "./components/closebutton.js";
import { open } from "./components/lightbox.js";

(() => {
    let xclick = document.querySelector(".closebutton"),
        albumlink = document.querySelectorAll(".songlink");


    xclick.addEventListener("click", close);
    albumlink.forEach(link => link.addEventListener("click", open));
})();