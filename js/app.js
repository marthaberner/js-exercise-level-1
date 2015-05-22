(function() {
  var button = document.getElementById("get-fare");
  button.addEventListener("click", function(event) {
    var departureCity = document.getElementById("departure-city").value;
    var arrivalCity = document.getElementById("arrival-city").value;
    var fare = calculateFare(departureCity, arrivalCity);
    showFare(fare);
    event.preventDefault();
  });
})();
