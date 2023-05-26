let userArray = [];
(()=>{ 
    let userInfo;
    userInfo = localStorage.getItem('userData');
    if(userInfo){
        userArray = JSON.parse(userInfo)
    }


    let userLogged;
    userLogged = localStorage.getItem('userLogged');

    if (userLogged) {
        window.location.href = 'index.html'
        console.log(userLogged)
    }


})()

let login = (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let isEmailCorrect = false;

    for(let i=0; i<userArray.length; i++){
        if(email === userArray[i].email){
            isEmailCorrect= true;
            if(password === userArray[i].password){

                console.log(userArray[i])

                localStorage.setItem('userLogged', JSON.stringify(userArray[i]));

                window.location.href = 'index.html'

            }
            else{
                document.getElementById('passError').innerHTML = `Password is incorrect!`
                
                setTimeout(()=>{
                    document.getElementById('passError').innerHTML = ``

                },3000)


            }}}

    if(!isEmailCorrect){
        document.getElementById('emailError').innerHTML = `Email is incorrect!`
    }


}