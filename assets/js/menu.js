const menu = document.querySelector(".menu");
const button = document.querySelector(".menu-button");

button.addEventListener("click", switchMenu);

function switchMenu() {
    
    let founded = false;

    menu.classList.forEach(element_class => {
        if (element_class == "visible") {
            menu.classList.remove("visible");
            founded = true;
        }
    });

    if (founded == false) {
        menu.classList.add("visible");
    }
}