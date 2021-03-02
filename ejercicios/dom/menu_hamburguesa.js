export default function hamburgerMenu(panelBtn, panel, menuLInk) {
    const d = document;
    d.addEventListener("click", e => {
        // El e.target.matches(`${panelBtn} *`) es para que al presionar en cualquier parte del botón de despliegue de opciones se reazalice la acción
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        // Para que desaparezca el menú cuando se presiona algún enlace
        if (e.target.matches(menuLInk)) {
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}
