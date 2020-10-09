let priceBtn = document.querySelector(".price-btn"),
    priceForm = document.querySelector(".price-form"),
    dealerBtn = document.querySelector(".dealer-btn"),
    dealerForm = document.querySelector(".dealer-form");

dealerBtn.onclick = () => {
    priceForm.style.opacity = 0;
    dealerForm.style.opacity = 1;
}

priceBtn.onclick = () => {
    dealerForm.style.opacity = 0;
    priceForm.style.opacity = 1;
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
