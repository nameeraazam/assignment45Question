let magiciansName = ["ayaz","fayaz","tariq","madad"];

function show_magicians(greet: string){

    for(let item of magiciansName){
        console.log(greet,item);
    }

};

show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); //2nd time calling