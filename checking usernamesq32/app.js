var current_user = ['ali', 'madaD', 'ayaz', 'fayaz', 'hussain', 'tariq', 'yasir'];
var new_users = ['ahmed', 'manzoor', 'madad', 'hadad', 'ayaz'];
//we will use forEach method
new_users.forEach(function (new_user) {
    var new_userlower = new_user.toLowerCase();
    //  We will use Some() method 
    var new_userTaken = current_user.some(function (current_user) { return current_user.toLowerCase() === new_userlower; });
});
// now we will apply conditions
if ('userNameTaken') {
    console.log('${new_user} needs to choose a new username because it,s already taken');
}
else {
    console.log("".concat(new_users, " is the new member added"));
    current_user.push('new_user'); //add new user to current users array;
}
console.log(current_user);
