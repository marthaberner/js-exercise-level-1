(function() {
  var button = document.getElementById("get-fare");
  button.addEventListener("click", function(event) {
    var departureCity = getElementValue("departure-city");
    var arrivalCity = getElementValue("arrival-city");
    var bags = getElementValue("num-bags");
    var travelClass = getElementValue("travel-class");
    var wifi = document.getElementById("wifi").checked;
    var discount = getElementValue("discount");
    var fare = calculateFare(departureCity, arrivalCity, bags, travelClass, wifi);
    event.preventDefault();
  });
})();
