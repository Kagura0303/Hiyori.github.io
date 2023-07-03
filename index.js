var imageUrls = [
    "./1.png",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg"
];

var currentImageIndex = 1;

$(document).ready(function(){
    $("#btn1").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            if (currentImageIndex > 0) {
                
                $("#pic").css("width", "235px"); 
                $("#pic").css("height", "300px"); 
                $("#pic").css("left", "42.8%");
                $("#pic").css("top", "28%")
            } else {
                
                $("#pic").css("width", ""); 
                $("#pic").css("height", ""); 
                $("#pic").css("left", "");
                $("#pic").css("top", "")
            }
            $("#pic").attr("src", imageUrls[currentImageIndex]).fadeIn(500);
        });
    });

    $("#btn2").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            if (currentImageIndex > 0) {
                
                $("#pic").css("width", "235px"); 
                $("#pic").css("height", "300px"); 
                $("#pic").css("left", "42.8%");
                $("#pic").css("top", "28%")
            } else {
                
                $("#pic").css("width", ""); 
                $("#pic").css("height", ""); 
                $("#pic").css("left", "");
                $("#pic").css("top", "")
            }
            $("#pic").attr("src", imageUrls[currentImageIndex]).fadeIn(500);
        });
    });
});
