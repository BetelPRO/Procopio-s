const menu = document.getElementById("btn_menu");
function toggleMenu(){
    const lista = document.getElementById("nav_box");
    lista.classList.toggle("active");
};

menu.addEventListener("click", toggleMenu);
