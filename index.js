var imageUrls = [
    "./1.png",
    "./2.png",
    "./3.png"
  ];
  
  var currentImageIndex = 1;


$(document).ready(function(){
    $("#btn1").click(function()
    {
        $("#pic").fadeOut(500, function() {
           
            $(this).attr("src", imageUrls[currentImageIndex]);

            $(this).fadeIn(500);

            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;

          });
          
    });
});