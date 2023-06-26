// function a(i) {
//   if (i <= 0) return;

//   console.log(i);

//   a(i - 1);
// }

// a(10);

// 5!
// 5 * 4 * 3 * 2 * 1

// = 120

// function factorial(a) {
//   if (a <= 0) return 1;

//   return a * factorial(a - 1)

// }


// console.log(factorial(6))




// let familyTree = {
//     name : 'Jhon',
//     childrens: [
//         {
//             name: 'Alson',
//             childrens: [
//                 {
//                     name: 'Mary',
//                     childrens: []
//                 }
//             ]
//         },
//         {
//             name: 'Mark',
//             childrens: [
//                 {
//                     name: 'Jennifer',
//                     childrens: [{
//                         name: 'Eren',
//                         childrens: []
//                     }]
//                 }
//             ]
//         }
//     ]
// }







// function printChild(child){

//     if(child.childrens.length === 0) return;


//     child.childrens.map(c=>{
//         console.log(c);
//         printChild(c)
//     })
// }


// printChild(familyTree)



