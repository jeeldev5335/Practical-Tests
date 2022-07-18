//create a function

function validateForm() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmpassword").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var genderMale = document.getElementById("gender");
    var genderFemale = document.getElementById("gender1");
    var language = document.getElementById("language");
    var nonLanguage = document.getElementById("nonLanguage");
    var about = document.getElementById("about").value;

    let isUnameValid = isPasswordValid = isconfirmPasswordValid = isNameValid = isAddressValid = isCountryValid = isZipcodeValid = isPhoneNoValid = isEmailValid = isGenderValid =  isLanguageValid = isAboutValid = false;

    if (uname == "") {
        document.getElementById("usernameError").innerHTML = "Please Enter a User id";
        isUnameValid = false;
    } 
    else { 
        if((uname.match(/[a-z]/g) || uname.match(/[0-9]/g)) || (uname.indexOf("-") !== -1 || uname.indexOf("_") !== -1)){
            document.getElementById("usernameError").innerHTML = "";
            isUnameValid = true;
        }   
        else{
            document.getElementById("usernameError").innerHTML = "Enter Valid Username";
            isUnameValid = false;
        }
    }

    if(pass == ""){
        document.getElementById("passwordError").innerHTML = "Enter the Password";
        isPasswordValid = false;
    } 
    else {
        if(pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g) && pass.length >= 8){
            document.getElementById("passwordError").innerHTML = "";
            isPasswordValid = true;
        }
        else {
            document.getElementById("passwordError").innerHTML =
`<pre>At least 1 uppercase character,
1 lowercase character,1 digit,
1 special character And 
Minimum 8 caracters.</pre>`;
            isEmailValid = false;
        }
    }

    if(confirmPass == ""){
        document.getElementById("confirmpasswordError").innerHTML = "ReEnter the Password";
        isconfirmPasswordValid = false;
    } 
    else if(confirmPass == pass){
        document.getElementById("confirmpasswordError").innerHTML = "";
        isconfirmPasswordValid = true;
    }
    else if(confirmPass !== pass){
        document.getElementById("confirmpasswordError").innerHTML = "Confirm Password And Password are not same";
        isconfirmPasswordValid = false;
    }

    if(name == ""){
        document.getElementById("nameError").innerHTML = "Enter the Name";
        isNameValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
        isNameValid = true;
    }

    if(address == ""){
        document.getElementById("addressError").innerHTML = "Enter the Address";
        isAddressValid = false;
    } else {
        document.getElementById("addressError").innerHTML = "";
        isAddressValid = true;
    }

    if(country == ""){
        document.getElementById("countryError").innerHTML = "Enter the Country";
        isCountryValid = false;
    } else {
        document.getElementById("countryError").innerHTML = "";
        isCountryValid = true;
    }

    if(zipcode == ""){
        document.getElementById("zipcodeError").innerHTML = "Enter the Zipcode";
        isZipcodeValid = false;
    } 
    else {
        if((/^([0-9]{5,})$/.test(zipcode) && zipcode.length == 5) || (/^([0-9]{5,})$/.test(zipcode) && zipcode.length == 6)){
            document.getElementById("zipcodeError").innerHTML = "";
            isZipcodeValid = true;
        }
        else {
            document.getElementById("zipcodeError").innerHTML = 
`<pre>Enter only Numbers and Maximum 
5 or 6 Number is required</pre>`;
            isZipcodeValid = false;
        }
    }
    
    if(phone == ""){
        document.getElementById("phoneError").innerHTML = "Enter the Phone Number";
        isPhoneNoValid = false;
    } 
    else {
        if(/^([0-9]{5,})$/.test(phone) && phone.length == 10){
            document.getElementById("phoneError").innerHTML = "";
            isPhoneNoValid = true;
        }
        else {
            document.getElementById("phoneError").innerHTML = 
`<pre>Enter only Numbers and 
Maximum 10 Number is required</pre>`;
            isPhoneNoValid = false;
        }
    }

    if(email == ""){
        document.getElementById("emailError").innerHTML = "Enter the Email";
        isEmailValid = false;
    } 
    else {
        if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1){
            document.getElementById("emailError").innerHTML = "";
            isEmailValid = true;
        }
        else {
            document.getElementById("emailError").innerHTML = "Please Enter Valid Email";
            isEmailValid = false;
        }
    }

    if(!genderMale.checked && !genderFemale.checked){
        document.getElementById("genderError").innerHTML = "Enter the Gender";
        isGenderValid = false;
    } 
    else if(genderMale.checked){
        var x = genderMale.value;
        document.getElementById("genderError").innerHTML = "";
        isGenderValid = true;
    }
    else if(genderFemale.checked){
        var x = genderFemale.value;
        document.getElementById("genderError").innerHTML = "";
        isGenderValid = true;
    }
    
    if(!language.checked && !nonLanguage.checked){
        document.getElementById("languageError").innerHTML = "Please select atleast one";
        isLanguageValid = false;
    } 
    else if(language.checked && nonLanguage.checked){
        var y = [language.value , nonLanguage.value];
        document.getElementById("languageError").innerHTML = "";
        isLanguageValid = true;
    }
    else if(language.checked){
        var y = [language.value];
        document.getElementById("languageError").innerHTML = "";
        isLanguageValid = true;
    }
    else if(nonLanguage.checked){
        var y = [nonLanguage.value];
        document.getElementById("languageError").innerHTML = "";
        isLanguageValid = true;
    }

    if(about == ""){
        document.getElementById("aboutError").innerHTML = "Enter Some Description";
        isAboutValid = false;
    } else {
        document.getElementById("aboutError").innerHTML = "";
        isAboutValid = true;
    }
    
    // console.log(isUnameValid , '&&' , isPasswordValid , '&&' , isconfirmPasswordValid , '&&' , isNameValid , '&&' , isAddressValid , '&&' , isCountryValid , '&&' , isZipcodeValid , '&&' , isPhoneNoValid , '&&' , isEmailValid , '&&' , isGenderValid , '&&' , isLanguageValid 
    // , '&&' , isAboutValid);
    if(isUnameValid && isPasswordValid && isconfirmPasswordValid && isNameValid && isAddressValid && isCountryValid && isZipcodeValid && isPhoneNoValid && isEmailValid && isGenderValid && isLanguageValid 
    && isAboutValid) {
        var oldData = localStorage.getItem("user");
        var oldDataArr = JSON.parse(oldData);
        const lastElement = oldDataArr[oldDataArr.length - 1];
        const obj = {
            username : uname,
            password : pass,
            confirmPassword : confirmPass,
            name : name,
            address : address,
            country : country,
            zipcode : zipcode,
            phoneno : phone,
            email : email,
            gender : x,
            language : y,
            about : about,
            id: lastElement && Number(lastElement.id) + 1 || 1
        }; 
        
        if(!oldDataArr) {
            oldDataArr = [];
        }
        
        confirm('User Created Successfully...')
        oldDataArr.push(obj);
        localStorage.setItem('user', JSON.stringify(oldDataArr));
        

        //For Redirect to other form ------- here we redirect the form to view table 
        //window.location.href= 'regformtable.html';
    }
}