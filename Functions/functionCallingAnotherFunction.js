function fruitCutter(fruit){
    return fruit * 4
}


function Juicer(apple, oranges){
    apple = 6;
    oranges = 2;

    let applePieces = fruitCutter(apple);
    let orangesPieces = fruitCutter(oranges);


    console.log(`This juice contains ${applePieces} and ${orangesPieces} `)
}

Juicer()

