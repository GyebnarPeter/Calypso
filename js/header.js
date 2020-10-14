$(document).ready(function(){
    $(".header-wrapper").load("header.html", () => {
        $(".nav-btn").click( () => {
            $("nav").slideToggle()
        });

        // Page test for link color
        let index = /index/,
            services = /szolgaltatasok/,
            garage = /szerviz/,
            contact = /kapcsolat/,
            pages = [index, services, garage, contact],
            navLinks = document.querySelectorAll("nav a"),
            url = window.location.href;

        for (let i = 0; i < pages.length; ++i) {
            if (pages[i].test(url)) {
                navLinks[i].classList.add("nav-active-link");
            }
        }
    });
});

// Header scroll effect
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