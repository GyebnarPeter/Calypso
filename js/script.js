// Nav slidetoggle
$(".nav-btn").click( () => {
    $("nav").slideToggle()
});

// Nav scroll effect
window.onscroll = () => {
    let headerWrapper = document.querySelector(".header-wrapper");
    let nav = document.querySelector("nav");

    if (document.documentElement.scrollTop > 100) {
        headerWrapper.classList.add("header-wrapper-scroll");
        nav.style.top = "70px";
    } else {
        headerWrapper.classList.remove("header-wrapper-scroll");
        nav.style.top = "100px";
    }
}