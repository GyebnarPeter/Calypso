let priceBtn = document.querySelector(".price-btn"),
    priceForm = document.querySelector(".price-form"),
    dealerBtn = document.querySelector(".dealer-btn"),
    dealerForm = document.querySelector(".dealer-form");

priceBtn.classList.add("offer-box-button-active");
priceForm.classList.add("active-form");

dealerBtn.onclick = () => {
    priceForm.classList.remove("active-form");
    dealerForm.classList.add("active-form");
    priceBtn.classList.remove("offer-box-button-active");
    dealerBtn.classList.add("offer-box-button-active");
}

priceBtn.onclick = () => {
    priceForm.classList.add("active-form");
    dealerForm.classList.remove("active-form");
    priceBtn.classList.add("offer-box-button-active");
    dealerBtn.classList.remove("offer-box-button-active");
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    }
