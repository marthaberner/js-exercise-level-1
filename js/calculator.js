
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

function bagFee(bags) {
  if(bags > 0) {
    return bags*25;
  } else {
    return 0;
  }
};


function showFare(fare) {
  var div = document.getElementById("results");
  div.innerHTML = "<h2>" + fare + "</h2>";
};

function calculateFare(departureCity, arrivalCity, bags) {
  if(departureCity === arrivalCity) {
    return "Your fare is unavailable. You must actually go somewhere.";
  } else {
    var bagsFee = bagFee(bags);
    var fare = fares[departureCity][arrivalCity];
    fare += bagsFee;
    return "<h3>Your price is: $" + fare + "</h3>";
  }
};
