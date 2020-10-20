// About us pager
let calypsoDescription = {
    advantages: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat autem vel eum iure reprehenderit id est laborum et dolorum fuga officia deserunt mollitia animi.</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>`,

    products: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat autem vel eum iure reprehenderit id est laborum et dolorum fuga officia deserunt mollitia animi.</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>`,

    support: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat autem vel eum iure reprehenderit id est laborum et dolorum fuga officia deserunt mollitia animi.</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>`
};

let aboutUs = document.querySelector(".about-us-description"),
    aboutUsLinks = document.querySelectorAll(".about-us-buttons a");

aboutUs.innerHTML = calypsoDescription.advantages;

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
    
