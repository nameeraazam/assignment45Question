function describe_city(nameOfcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameOfcity, " is in ").concat(country);
}
;
// 3 cities
var city1 = describe_city("karachi");
var city2 = describe_city("larkana");
var city3 = describe_city("Hyderabad");
var city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
