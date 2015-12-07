/* 
 * THIS IS WERE MAGIC COME TRUE! :P
 */


 $(document).ready(function()
  {
   
     
     $("#about_us").click(function()
     {
         $("#wholecontent").hide();
         $("#wholecontent3").hide();
         $("#wholecontent4").hide();
         $("#motherbox").hide();
         $("#wholecontent2").fadeIn(1000);
         
     });
     
     
     $("#index_home").click(function()
     {
       $("#wholecontent2").hide();
       $("#wholecontent3").hide();
       $("#wholecontent4").hide();
       $("#motherbox").hide();
       $("#wholecontent").fadeIn(1000);
     });
     
     
     $("#events").click(function()
     {
        $("#wholecontent").hide();
        $("#wholecontent2").hide();
        $("#wholecontent4").hide();
        $("#motherbox").hide();
        $("#wholecontent3").fadeIn(1000);
     });
     
     
     $("#MandV").click(function()
     {
         
        $("#wholecontent").hide();
        $("#wholecontent2").hide();
        $("#wholecontent3").hide();
        $("#motherbox").hide();
        $("#wholecontent4").fadeIn(1000);
     });
     
     $("#login").click(function()
     {
       $("#wholecontent").hide();
       $("#wholecontent2").hide();
       $("#wholecontent3").hide();
       $("#wholecontent4").hide();
       $("#motherbox").fadeIn();
     });
     
   
     
  });

$(document).ready(function()
{
   $(".toogleup").click(function()
     {
         $(".collegenight2").slideUp();
     });
   
    $("#toogle").click(function()
     {  
         
        $(".collegenight2").slideDown();
    
     });
 
    
});


$(document).ready(function()
    {
         $("#toogle1").click(function()
      {
         $(".lingongwika2").slideDown(); 
      });
     
  
   
       $("#toogleup1").click(function()
       {
           $(".lingongwika2").slideUp(); 
 
    });
  
    });
    
    
    $(document).ready(function()
    {
       $("#toogle2").click(function()
       {
          $(".intrams_content2").slideDown(); 
       }); 
       
       $("#toogleup2").click(function()
       {
          $(".intrams_content2").slideUp(); 
       });
       
       $("#toogle3").click(function()
       {
          $(".mrandms_ama_content2").slideDown(); 
       });
       
       $("#toogleup3").click(function()
       {
          $(".mrandms_ama_content2").slideUp(); 
       });
       
       $("#toogle4").click(function()
       {
           $(".candy_content2").slideToggle();
       });
       
       $("#toogleup4").click(function()
       {
           $(".candy_content2").slideUp();
       });
    });
    
   
    
    
$(document).ready(function(){
            
            
		//$("#img1").hide();
		$("#2").hide();
		$("#3").hide();
		
		var pic = 1;
		var myVar = setInterval(function(){viewPic();},3000);
		function viewPic(){
			if(pic===1){
				$("#2").fadeIn();
				$("#1").fadeOut();
				pic++;
			}
			else if(pic===2){
				$("#3").fadeIn();
				$("#2").fadeOut();
				pic++;
			}
			else if(pic===3){
				$("#1").fadeIn();
				$("#3").fadeOut();
				pic=1;
			}
		}
		
		
	});
        
        $(document).ready(function()
        {
           $("#other_info").click(function()
           {
              
               $(".other_info").slideToggle();
               
               
           });
            
            $("#others").click(function()
            {
               $(".optionss").slideToggle(); 
            });
            
            
            $("#personal_info").click(function()
            {
               $(".full_info").show();
               $(".full_info").animate({"top":"50px"}); 
            });
        });

