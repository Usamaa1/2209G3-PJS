class Animal{
    constructor(name){
        this.name = name;

    }


    sound(animalName){}

}



class Elephant extends Animal{

    constructor(name){
        super(name)
    }

    sound(sound){
        console.log(`this is message`);  
    }

}

class Lion extends Animal{

    constructor(name){
        super(name)
    }

    sound(sound){
        console.log(`Lion sound : ${sound}`);  
    }
    
}


let elephant = new Elephant('African Elephant')
let lion = new Lion('Asian Lion')

elephant.sound()
lion.sound('Roar')





