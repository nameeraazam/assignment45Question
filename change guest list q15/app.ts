let guest_list : string [] =['ali', 'farhan', 'raza','ayesha',];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You')
}
let not_present : string = 'farhan';
let not_guest : string = 'Babar Azam';
for(let i=0; i<guest_list.length; i++){
console.log(`Respected Sir/Madam` + guest_list[i] + ', \nWe inivited you on dinner tomorrow.\n\nThankyou')
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner. `)



