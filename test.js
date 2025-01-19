// gallery funnction start
function myFunction1(){
    document.getElementById("Kedarnath").style.display="block";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";
    document.getElementById("Pashupati").style.display="none";
}
function myFunction2(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="block";``
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";
    document.getElementById("Pashupati").style.display="none";
}
function myFunction3(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="block";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";
    document.getElementById("Pashupati").style.display="none";
}
function myFunction4(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="block";
    document.getElementById("Rishikesh").style.display="none";
    document.getElementById("Pashupati").style.display="none";
}
function myFunction5(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="block";
    document.getElementById("Pashupati").style.display="none";
}
function myFunction6(){
    document.getElementById("Kedarnath").style.display="none";
    document.getElementById("Badrinath").style.display="none";
    document.getElementById("Yamunotri").style.display="none";
    document.getElementById("Gangotri").style.display="none";
    document.getElementById("Rishikesh").style.display="none";
    document.getElementById("Pashupati").style.display="block";
}
// gallery function end
// mouse over and mouse out function
function mOver(obj) {
    obj.innerHTML = "Thank You"
  } 
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
//   on focus function
function focusFun() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("fname").style.background = "yellow";
    document.getElementById("lname").style.background = "yellow";
    document.getElementById("phone").style.background = "yellow";
    document.getElementById("email").style.background = "yellow";

  }
  
  function blurFun() {
    // No focus = Changes the background color of input to red
    document.getElementById("fname").style.background = "";
    document.getElementById("lname").style.background = "";
    document.getElementById("phone").style.background = "";
    document.getElementById("email").style.background = "";
    
  }

// on change function
function upperCase(){
    
    const x= document.getElementById("fname");
    x.value =x.value.toUpperCase();
    const y= document.getElementById("lname");
    y.value =y.value.toUpperCase();
    const z= document.getElementById("phone");
    z.value =z.value.toUpperCase();
    const a= document.getElementById("email");
    a.value =a.value.toUpperCase();
}
// required all fileds methods
function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;

    if (fname == null || fname == "") {
        alert("Please fill out firstName!");
        return false;
    }
    if (lname == null || lname == "") {
        alert("Please fill out lastName!");
        return false;
    }
    if (phone == null || phone == "") {
        alert("Please fill out phoneNumber!");
        return false;
    }
    if (email== null || email == "") {
        alert("Please fill out email!");
        return false;
    }
    
}
