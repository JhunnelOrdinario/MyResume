

function savestud()
{
    //var UNAME     = document.getElementById("UNAME").value;
    //var PASS      = document.getElementById("PASS").value;
    //var RPASS     = document.getElementById("RPASS").value;
    //var TYPES      = document.getElementById("TYPES").value;
    var LNAME     = document.getElementById("LNAME").value;
    var FNAME     = document.getElementById("FNAME").value;
    var MNAME     = document.getElementById("MNAME").value;
    var TYPE      = document.getElementById("TYPE").value;
    var CVSTATUS  = document.getElementById("CVSTATUS").value;
    var GENDER    = document.getElementById("GENDER").value;
    var TEL       = document.getElementById("TEL").value;
    var COURSE    = document.getElementById("COURSE").value;
    var BPLACE    = document.getElementById("BPLACE").value;
    var BDATE     = document.getElementById("BDATE").value;
    var FANAME    = document.getElementById("FANAME").value;
    var FAOCC     = document.getElementById("FAOCC").value;
    var MONAME    = document.getElementById("MONAME").value;
    var MOOCC     = document.getElementById("MOOCC").value;
    var SCHOOL    = document.getElementById("SCHOOL").value;
    var SCHOOLADD = document.getElementById("SCHOOLADD").value;
    var OCC       = document.getElementById("OCC").value;
    var NAMEOFCOMP= document.getElementById("NAMEOFCOMP").value;
    
    
    if(//UNAME === "" || PASS === "" || RPASS === "" || TYPES === ""  || 
       LNAME === "" || FNAME === "" || MNAME === "" || TYPE === "" || CVSTATUS === ""
       || GENDER === "" || TEL === "" || COURSE === "" || BPLACE === "" || BDATE === ""
       || FANAME === "" || FAOCC === "" || MONAME === "" || MOOCC === "" || SCHOOL === ""
       || SCHOOLADD === "" || OCC === "" || NAMEOFCOMP === "")
     {
         alert("Please Fill The Form");
         
     }   
    else if (TEL.length < 11 || TEL.length > 11)
    {
        alert("Please Enter a valid telephone number");
    }
    else if(isNaN(TEL))
    {
        alert("Please Enter a Numbers in telephone number");
    }
    //else if(PASS !== RPASS)
    //{
      //  alert("Password Does not Match");
    //}
    else 
    {
        //alert("Please Enter a Numbers in telephone number");
        var x  = confirm("Are You Sure You Want To Save?")
        if(x === true)
        {
            if(window.XMLHttpRequest)
                {
                    //code for IE7 Firefox chrome safari
                    xmlhttp = new XMLHttpRequest();
                    
                }
             else
             {
                   //code for IE5 and IE6
                   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                 
             }
          xmlhttp.onreadystatechange=function()
                {
                 if(xmlhttp.readyState==4 && xmlhttp.status==200)
                     {
                         alert(xmlhttp.responseText);
                     }
                 }
                 xmlhttp.open("POST","save_student_information.php" ,true);
                 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                 xmlhttp.send("LNAME="
              +document.getElementById("LNAME").value
              +"&FNAME="+document.getElementById("FNAME").value
              +"&MNAME="+document.getElementById("MNAME").value
             +"&TYPE="+document.getElementById("TYPE").value
             +"&CVSTATUS="+document.getElementById("CVSTATUS").value
             +"&GENDER="+document.getElementById("GENDER").value
             +"&TEL="+document.getElementById("TEL").value
             +"&COURSE="+document.getElementById("COURSE").value
             +"&BPLACE="+document.getElementById("BPLACE").value
             +"&BDATE="+document.getElementById("BDATE").value
             +"&FANAME="+document.getElementById("FANAME").value
             +"&FAOCC="+document.getElementById("FAOCC").value
             +"&MONAME="+document.getElementById("MONAME").value
             +"&MOOCC="+document.getElementById("MOOCC").value
             +"&SCHOOL="+document.getElementById("SCHOOL").value
             +"&SCHOOLADD="+document.getElementById("SCHOOLADD").value
             +"&OCC="+document.getElementById("OCC").value
             +"&NAMEOFCOMP="+document.getElementById("NAMEOFCOMP").value);
     
             document.getElementById("LNAME").value = "";            
             document.getElementById("FNAME").value = "";
             document.getElementById("MNAME").value = "";
             document.getElementById("TEL").value = "";
             document.getElementById("COURSE").value = "";
             document.getElementById("BPLACE").value = "";
             document.getElementById("BDATE").value = "";
             document.getElementById("FANAME").value = "";
             document.getElementById("FAOCC").value = "";
             document.getElementById("MONAME").value = "";
             document.getElementById("MOOCC").value = "";
             document.getElementById("SCHOOL").value = "";
             document.getElementById("SCHOOLADD").value = "";
             document.getElementById("OCC").value = "";
             document.getElementById("NAMEOFCOMP").value = "";
            
        }
        
        
    }
}

function search()
{
        var search = document.getElementById("search");
        
       if(window.XMLHttpRequest)
                {
                    //code for IE7 Firefox chrome safari
                    xmlhttp = new XMLHttpRequest();
                    
                }
             else
             {
                   //code for IE5 and IE6
                   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                 
             }
               xmlhttp.onreadystatechange=function()
                {
                 if(xmlhttp.readyState==4 && xmlhttp.status==200)
                     {
                         document.getElementById("texthint").innerHTML = xmlhttp.responseText;
                     }
                 }
                 xmlhttp.open("POST","search_student.php" ,true);
                 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                 xmlhttp.send("search="
              +document.getElementById("search").value);
    
    
    
    
    
    
    
}

function searchstud()
{
    
        //var search = document.getElementById('search').value;
    
    
         if(window.XMLHttpRequest)
                {
                    //code for IE7 Firefox chrome safari
                    xmlhttp = new XMLHttpRequest();
                    
                }
             else
             {
                   //code for IE5 and IE6
                   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                 
             }
               xmlhttp.onreadystatechange=function()
                {
                 if(xmlhttp.readyState==4 && xmlhttp.status==200)
                     {
                         document.getElementById("change").innerHTML = xmlhttp.responseText;
                     }
                 }
                 xmlhttp.open("POST","search_student.php" ,true);
                 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                 xmlhttp.send("search="
                +document.getElementById("search").value);
    
    
    
}

function retrive()
{
    
    if(window.XMLHttpRequest)
                {
                    //code for IE7 Firefox chrome safari
                    xmlhttp = new XMLHttpRequest();
                    
                }
             else
             {
                   //code for IE5 and IE6
                   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                 
             }
               xmlhttp.onreadystatechange=function()
                {
                 if(xmlhttp.readyState==4 && xmlhttp.status==200)
                     {
                         document.getElementById("retrive").innerHTML = xmlhttp.responseText;
                     }
                 }
                 xmlhttp.open("POST","about_admision.php" ,true);
                 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                 xmlhttp.send("ID="
                +document.getElementById("ID").value);
    
    
    
    
}