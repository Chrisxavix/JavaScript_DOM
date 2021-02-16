import hamburgerMenu from "./dom/menu_hamburguesa.js"

const d = document;
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
})


/* En una sola clase js, no hacer importes */
/* function hamburgerMenu(panelBtn, panel
    , menuLInk) {
    const d = document;
    d.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        if(e.target.matches(menuLInk)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        } 
    })
}

hamburgerMenu(".panel-btn", ".panel", ".menu a") */
