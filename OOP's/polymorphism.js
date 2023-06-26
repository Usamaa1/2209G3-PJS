class Animal{
    constructor(name){
        this.name = name;

    }


    sound(animalName){
        console.log(`This ${animalName} sound: `);
    }
}


class Elephant extends Animal{

    constructor(name){
        super(name)
    }

    sound(sound){
        console.log(`Elephant sound : ${sound}`);  
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




let animal1 = new Elephant('African Elephant')
let animal2 = new Lion('Asian Lion')



animal1.sound('Snorts')
animal2.sound('Roar')



console.log(animal1);
console.log(animal2);





