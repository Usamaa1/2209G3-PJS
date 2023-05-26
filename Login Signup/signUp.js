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


let signUp = (e) => {

    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cPassword = document.getElementById('cPassword').value;
    let city = document.getElementById('city').value;
    let gender = document.getElementById('gender').value;   
    console.log(userArray);

    for(let i=0; i<userArray.length; i++){
        if(email === userArray[i].email){
            document.getElementById('emailError').innerHTML = `Email already exist.`
            setTimeout(()=>{
                document.getElementById('emailError').innerHTML = ``
            }, 5000)          
            return;
        }
    }

    if(password !== cPassword){
        document.getElementById('passError').innerHTML = `Kindly enter same password as above.`
        setTimeout(()=>{
            document.getElementById('passError').innerHTML = ``
        }, 5000)
        return;
    }

    let userObj = {
        firstName,
        lastName,
        email,
        password,
        cPassword,
        city,
        gender
    }

    console.log(userObj)
    userArray.push(userObj)
    let stringified = JSON.stringify(userArray)
    console.log(stringified)
    localStorage.setItem('userData', stringified);
    e.target.reset();
}