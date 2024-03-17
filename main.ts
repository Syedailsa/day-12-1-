let animals: string[] = [
   "cats",
   "dogs",
   "mouse",
];

animals.forEach(animal => {
    if(animal == "cats"){
        console.log(`${animal} are sweet`)
    }else if(animal == "dogs"){
        console.log(`${animal} are scary`)
    }else if(animal == "mouse"){
        console.log(`${animal} is tiny`)
    }
});

export{}