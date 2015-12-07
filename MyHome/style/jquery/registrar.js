 

function savesub()
{
    var scode     = document.getElementById("scode").value;
    var sdesc     = document.getElementById("sdesc").value;
    var unit     = document.getElementById("unit").value;
   
    
    
    if( scode === "" || sdesc === "" || unit === "" )
     {
         alert("Please Fill The Form");
         
     }   

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
                 xmlhttp.open("POST","reg_save_subject.php" ,true);
                 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                 xmlhttp.send("	scode="
              +document.getElementById("scode").value
              +"&sdesc="+document.getElementById("sdesc").value
              +"&unit="+document.getElementById("unit").value);
     
            
            
            
            
        }
        
        
    }


