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
  return bags*25;
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

function calculateDiscount(code) {
  var discount = 0;

  if(code === "10OFF") {
    discount = .10;
  } else if(code === "20OFF") {
    discount = .20;
  }

  return discount;
};

function showFare(result) {
  var div = document.getElementById("results");
  div.innerHTML =  result;
};

function calculateWifi(wifi) {
  return wifi ? 12 : 0;
};

function calculateFare(departureCity, arrivalCity, bags, travelClass, wifi) {
  if((departureCity === arrivalCity) || (arrivalCity === "Choose A City" || departureCity === "Choose A City")){
    showFare("<h3>The information you entered is invalid.</h3>");
  } else {
    var bagFee = calculateBagFee(bags);
    var fare = fares[departureCity][arrivalCity];
    var classFee = calculateClassFee(travelClass);
    var wifiFee = calculateWifi(wifi);
    fare += (bagFee + classFee + wifiFee);
    showFare("<h3>Your price is: $" + fare + "</h3>");
  }
};

function getElementValue(id) {
  return document.getElementById(id).value;
}
