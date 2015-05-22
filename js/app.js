(function() {
  var button = document.getElementById("get-fare");
  button.addEventListener("click", function(event) {
    var departureCity = document.getElementById("departure-city").value;
    var arrivalCity = document.getElementById("arrival-city").value;
    var bags = document.getElementById("num-bags").value;
    var fare = calculateFare(departureCity, arrivalCity, bags);
    showFare(fare);
    event.preventDefault();
  });
})();
