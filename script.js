function validateLoginForm() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById('pass').value;

    if (user == "" || pass == ""){
        document.getElementById('errMsg').textContent = "Please Fill all Input";
        return false;
    }
    else if(pass.length < 8){
        document.getElementById('errMsg').textContent = "Password must be aleast 8";
        return false;
    }
    else {
        alert("Login Successful as all input are correct");
        return true;
    }
}

function validateSignupForm() {
    const fName = document.getElementById('fName').value;
    const matNum = document.getElementById('matNum').value;
    const sUser = document.getElementById('user').value;
    const sPass = document.getElementById('pass').value;
    const conPass = document.getElementById('pass2').value;

    if (fName == "" || sPass == "" || matNum == "" || sUser == "") {
        document.getElementById('errMsg').textContent = "Please Fill All Field";
        return false;
    }
    else if (sPass.length < 8) {
        document.getElementById('errMsg').textContent = "Password must be aleast 8";
        return false;
    }
    else if (sPass != conPass) {
        document.getElementById('errMsg').textContent = "Both Password must be Equal";
        return false;
    }
    else {
        alert("Signup Successful as all input are correct");
        return true;
    }
}


