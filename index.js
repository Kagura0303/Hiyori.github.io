var imageUrls = [
    "./1.png",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg"
];

var currentImageIndex = 0;
var preloadedImages = [];

function preloadImages() {
    for (var i = 0; i < imageUrls.length; i++) {
        var image = new Image();
        image.src = imageUrls[i];
        preloadedImages.push(image);
    }
}

$(document).ready(function(){
    preloadImages();

    $("#btn1").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            if (currentImageIndex === 0) {
                $("#pic").removeAttr("style");
                $("#pic").attr("src", preloadedImages[currentImageIndex].src).show();
            } else {
                $("#pic").css({
                    "width": "16%",
                    "height": "38%",
                    "left": "42.8%",
                    "top": "28%"
                });
                $("#pic").attr("src", preloadedImages[currentImageIndex].src).fadeIn(500);
            }
        });
    });

    $("#btn2").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            if (currentImageIndex === 0) {
                $("#pic").removeAttr("style");
                $("#pic").attr("src", preloadedImages[currentImageIndex].src).show();
            } else {
                $("#pic").css({
                    "width": "16%",
                    "height": "38%",
                    "left": "42.8%",
                    "top": "28%"
                });
                $("#pic").attr("src", preloadedImages[currentImageIndex].src).fadeIn(500);
            }
        });
    });
});

