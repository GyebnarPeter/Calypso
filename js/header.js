$(document).ready(function(){
    $(".header-wrapper").load("header.html", () => {
        $(".nav-btn").click( () => {
            $("nav").slideToggle()
        });
        
        // Page test for link colors
        let contact = /kapcsolat/;
        let pruduct = /index/;
        let page = window.location.href;

        if (contact.test(page)) {
            console.log("true");
            
        } else {
            console.log(false);
        }
        
    });
});

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