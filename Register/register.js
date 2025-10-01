document.querySelector("form").addEventListener("submit",evaluate);

function evaluate(event){ //don't send data yet, evaluate data first
    event.preventDefault();
    const user=document.querySelector("#user").value.trim();
    const email=document.querySelector("#email").value.trim().toLowerCase();
    const password=document.querySelector("#password").value.trim();
    const confirmPassword=document.querySelector("#confirm-password").value.trim();
    const errors=[];

    if(user.length<3){
        errors.push("Username must be longer than 2 digits");
    }

    const regExp1=/^\S+@\S+\.\S+$/

    if(!regExp1.test(email)){  //check if it doesn't match the reg expression
        errors.push("Invalid e-mail");
    } 
    // 5 characters|1 minusc letter| 1 capital letter| 1 number

    if(password.length<6 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
        errors.push("Invalid password. Must have at least 5 characters, 1 minuscule,1 capital and 1 number");
    }

    if(confirmPassword!==password){
        errors.push("Both passwords must be the same");
    }

    if(errors.length>0){
        document.querySelector(".errors").innerHTML="";
        errors.map(error=>document.querySelector(".errors").innerHTML+=`<div class="error">${error}</div>`);
    }else{
        document.querySelector("form").submit(); //send the values
    }
}