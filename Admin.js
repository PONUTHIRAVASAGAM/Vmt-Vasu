function validate(){
    var lname = document.getElementById("UserName").value;
    var pname = document.getElementById("Password").value;

    if ( lname == null || lname == "") {
        document.getElementById("UName").innerHTML="Please Enter Your User Name !!!";
        
       
 }
    if ( pname == null || pname == "") {
        document.getElementById("PWord").innerHTML="Please Enter Your Pasaword !!!";

        return false;
    }
    if(lname.length < 5){  
        document.getElementById("UName").innerHTML="UserName length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(lname.length > 15){  
        document.getElementById("UName").innerHTML="UserName length must not exceed 15 characters !!!";
  
        return false;   
    }
    if(pname.length < 8){  
        document.getElementById("PWord").innerHTML="Password length must be atleast 8 characters !!!";
        return false;   
      
    } 
    if(pname.length > 16){  
        document.getElementById("PWord").innerHTML="Password length must not exceed 16 characters !!!";
  
        return false;   
    } 

    // else {
    //     alert("Welcome To AKKA UNIVERSITY");
    //  }


     else if( lname == "admin" && pname == "1234567890"){
        alert("Welcome To AKKA UNIVERSITY");
        location.href = "After Admin Login.html"
    }

 else {
        document.getElementById("UName").innerHTML = "Invalid UserName !!!",
        document.getElementById("PWord").innerHTML = "Invalid Password !!!";
    }

}