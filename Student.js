function validate(){
    var fname = document.getElementById("FirstName").value;
    var lname = document.getElementById("lastName").value;
    var pname = document.getElementById("Password").value;
    var dname = document.getElementById("DOB").value;
    
    if ( fname == null || fname == "") {
        document.getElementById("FName").innerHTML="Please Enter Your First Name !!!";
        
       
 }
    if ( lname == null || lname == "") {
        document.getElementById("LName").innerHTML="Please Enter Your Last Name !!!";

    }

    if ( pname == null || pname == "") {
        document.getElementById("PName").innerHTML="Please Enter Your PassWord !!!";

    
    }
    if ( dname == null || dname == "") {
        document.getElementById("DName").innerHTML="Please Enter Your Date Of Birth !!!";
        
        return false;
 }


 if(fname.length < 5){  
    document.getElementById("FName").innerHTML="First Name length must be atleast 5 characters !!!";
  
    return false;  
} 
if(fname.length > 15){  
    document.getElementById("FName").innerHTML="First Name length must not exceed 15 characters !!!";

    return false;   
}
if(lname.length < 5){  
    document.getElementById("LName").innerHTML="Last Name length must be atleast 5 characters !!!";
    return false;   
  
} 
if(lname.length > 15){  
    document.getElementById("LName").innerHTML="Last Name length must not exceed 15 characters !!!";

    return false;   
} 
if(pname.length < 5){  
    document.getElementById("PName").innerHTML="PassWord  must be atleast 5 characters !!!";
    return false;   
  
} 
if(pname.length > 15){  
    document.getElementById("PName").innerHTML="PassWord must not exceed 15 characters !!!";

    return false;   
} 
if(dname.length < 10){  
    document.getElementById("DName").innerHTML=" Mobile Number must be atleast 10 characters !!!";
    return false;   
  
} 
if(dname.length > 10){  
    document.getElementById("DName").innerHTML="Mobile Number must not exceed 10 characters !!!";

    return false;   
} 
else if( fname == "Rangaraj" && lname == "Pandey" && pname == "admin"&& dname == "06/05/2000" ){
    alert("Student Registered Successfully");
    location.reload();
}

else {
    document.getElementById("FName").innerHTML = "Invalid Data !!!",
    document.getElementById("LName").innerHTML = "Invalid Data !!!";
    document.getElementById("PName").innerHTML = "Invalid Data !!!";
    document.getElementById("DName").innerHTML = "Invalid Data !!!";


}
}