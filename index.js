var imageUrls = [
    "./1.png",
    "./2.png",
    "./3.png"
];

var currentImageIndex = 1;

$(document).ready(function(){
    $("#btn1").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            $("#pic").attr("src", imageUrls[currentImageIndex]).fadeIn(500);
        });
    });

    $("#btn2").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            $("#pic").attr("src", imageUrls[currentImageIndex]).fadeIn(500);
        });
    });
});
