var guest_list = ['ali', 'farhan', 'raza', 'ayesha',];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You');
}
var not_present = 'farhan';
var not_guest = 'Babar Azam';
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ', \nWe inivited you on dinner tomorrow.\n\nThankyou');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner. "));
