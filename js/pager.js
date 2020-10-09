// About us pager
let calypsoDescription = {
    branding: `<p>We're a close team of creatives, designers & developers who work together to create beautiful, engaging digital experiences. Our team is specially designed to create successful, custom, innovative digital products from the initial concept through full product launch. From whiteboard sketches to pixel-perfect designs.</p>
    <p>We take pride in delivering only the best. We're an agency born out of a passion to make great products. We help companies and startups from all over the world materialize their ideas into great projects.</p>`,

    development: `<p>Lorem We're a close team of creatives, designers & developers who work together to create beautiful, engaging digital experiences. Our team is specially designed to create successful, custom, innovative digital products from the initial concept through full product launch. From whiteboard sketches to pixel-perfect designs.</p>
    <p>We take pride in delivering only the best. We're an agency born out of a passion to make great products. We help companies and startups from all over the world materialize their ideas into great projects.</p>`,

    photography: `<p>We're a close team of creatives, designers & developers who work together to create beautiful, engaging digital experiences. Our team is specially designed to create successful, custom, innovative digital products from the initial concept through full product launch. From whiteboard sketches to pixel-perfect designs.</p>
    <p>We take pride in delivering only the best. We're an agency born out of a passion to make great products. We help companies and startups from all over the world materialize their ideas into great projects.</p>`
};

let aboutUs = document.querySelector(".about-us-description"),
    aboutUsLinks = document.querySelectorAll(".about-us-buttons a"),
    branding = document.querySelector(".branding"),
    development = document.querySelector(".development"),
    photography = document.querySelector(".photography");

aboutUs.innerHTML = calypsoDescription.branding;

let changeText = (id) => {
    aboutUs.style.opacity = 0;
    setTimeout(() => {
        aboutUs.innerHTML = calypsoDescription[`${id}`];
        aboutUs.style.opacity = 1;
    }, 700);
}

$(".about-us-buttons a").click( function(event) {
    event.preventDefault();
    let id = $(this).attr("class");
    let element = document.querySelector(`.${id}`);
    $(".about-us-active").removeClass("about-us-active");
    element.classList.add("about-us-active");

    changeText(id);
});
    
