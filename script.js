//object to store details
 let userDetailsDatabase = {}


 function getUserDetails(){
     //username
    let userName = prompt("Enter your username");
     if (userName == null){
        return
     }
   
    function validateUserName(userName){
        if(userName.length < 10 && userName.length > 0){
            return true
        } else{
            return false
        }
    }
     while (validateUserName(userName) == false){
        userName = prompt("username must be less than 10 and greater than 0")
     }  

     userDetailsDatabase["userName"] = userName

    //email address
    let email = prompt("Enter your email address");
    if (email == null){
        return
     }
   
    function validateEmail(email){
        const emailCheck =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // check if its an email
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true){
            return true
        }else {
            return false
        }
    }

    while (validateEmail(email) == false){
        email = prompt("Enter a valid Email")
    }
    
    userDetailsDatabase["email"] = email
    
    //phone number
    let phoneNumber = prompt("Enter your phone Number")
    if (phoneNumber == null){
        return
     }
   
    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 11){
            return true
        } else{
            return false
        }
    } 
    while (validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("phone number must be 11 digits")
    }

    userDetailsDatabase["phoneNumber"] = phoneNumber
   
    //Gender
    let gender = prompt("Enter your gender");
    if (gender == null){
        return
     }
   
    function validateGender(gender){
        if (gender.length == 4){
            return true
    }
    } 
    
    while (validateGender(gender) == false){
        gender = prompt("Enter a valid GEnder")
    }
    userDetailsDatabase["gender"] = gender
   
   //password 
    let password = prompt("Enter password")
    if (password == null){
        return
     }
   
    function validatePassword(password){
        if (password.length > 6){
            return false
        } else {
            return true
        }
    }
    
    while (validatePassword(password) == false){
        password = prompt("Password must be greater than 6")
    }

    userDetailsDatabase["password"] = password
   
   
    //confirmpassword
    let confirmPassword = prompt("Confirm your password")
    if (confirmPassword == null){
        return
     }
   
     function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password ){
            return false
        } else {
            return true
        }
    }
    
    while (validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("confirm password does not match password, try again")
    }

    userDetailsDatabase["confirmPassword"] = confirmPassword
   
}

function displayUserDetails(){
    alert('Your Details\n\nUserName : ${userDetailsDatabase.UserName}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail : ${userDetailsDatabase.Email}\
    ')}
