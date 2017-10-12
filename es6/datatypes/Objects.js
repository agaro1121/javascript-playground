const obj = {}

/* Setting properties/members */
obj.size;
obj.color = "yellow";
obj["not an identifier"] = 3;

/* accessing properties/members */
obj["color"];
obj.color;
obj["not an identifier"];

/* Symbols as properties */
const SIZE = Symbol();
obj[SIZE] = 8; //set
obj[SIZE]; //get
//obj.SIZE; //DOES NOT WORK!!!!!

const anthony = {
	name: "Anthony",
	age: 28
};

/* Functions in objects */
anthony.speak = function() { return "roar!" }


const sam3 = { name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
	} 
};

sam3.classification.family; // "Felinae"
sam3["classification"].family; // "Felinae"
sam3.classification["family"]; // "Felinae"
sam3["classification"]["family"]; // "Felinae"

/* Deleting properties */
delete sam3.speak //returns true
delete sam3.classification // returns true
