function validate(){
    var lname = document.getElementById("UserName").value;
    var pname = document.getElementById("Password").value;

    if ( lname == null || lname == "") {
        document.getElementById("UName").innerHTML="Please Enter The CollegeName !!!";
        
       
 }
    if ( pname == null || pname == "") {
        document.getElementById("PWord").innerHTML="Please Enter Your Pasaword !!!";

        return false;
    }
    if(lname.length < 5){  
        document.getElementById("UName").innerHTML="CollegeName length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(lname.length > 15){  
        document.getElementById("UName").innerHTML="CollegeName length must not exceed 15 characters !!!";
  
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


     else if( lname == "INDUS" && pname == "87654321"){
        alert("Welcome To INDUS UNIVERSITY");
        location.href = "After College Login.html"
    }

 else {
        document.getElementById("UName").innerHTML = "Invalid College Name !!!",
        document.getElementById("PWord").innerHTML = "Invalid Password !!!";
    }

}