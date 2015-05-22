
var fares = {
  "New York" : {
    "Los Angeles" : 15,
    "Chicago" : 10
  },
  "Chicago" : {
    "Los Angeles" : 10,
    "New York" : 7
  },
  "Los Angeles" : {
    "Chicago" : 10,
    "New York" : 15
  }
};

function calculateBagFee(bags) {
  if(bags > 0) {
    return bags*25;
  } else {
    return 0;
  }
};

function calculateClassFee(travelClass) {
  if(travelClass === "Business (+ $200)") {
    return 200;
  } else if(travelClass === "First (+ $500)") {
    return 500;
  } else {
    return 0;
  }
};

function showFare(fare) {
  var div = document.getElementById("results");
  div.innerHTML = "<h2>" + fare + "</h2>";
};

function calculateWifi(wifi) {
  if(wifi === true) {
    return 12;
  } else {
    return 0;
  }
};

function calculateFare(departureCity, arrivalCity, bags, travelClass, wifi) {
  if(departureCity === arrivalCity) {
    return "Your fare is unavailable. You must actually go somewhere.";
  } else {
    var bagFee = calculateBagFee(bags);
    var fare = fares[departureCity][arrivalCity];
    var classFee = calculateClassFee(travelClass);
    var wifiFee = calculateWifi(wifi);
    fare += (bagFee + classFee + wifiFee);
    return "<h3>Your price is: $" + fare + "</h3>";
  }
};
