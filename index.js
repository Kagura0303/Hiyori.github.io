var imageUrls = [
    "./1.png",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg"
];

var currentImageIndex = 0;
var preloadedImages = [];

// Preload images
function preloadImages() {
    for (var i = 0; i < imageUrls.length; i++) {
        var image = new Image();
        image.src = imageUrls[i];
        preloadedImages.push(image);
    }
}

$(document).ready(function(){
    // Preload images on document ready
    preloadImages();

    $("#btn1").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            if (currentImageIndex === 0) {
                // Reset image styles if it's the first image
                $("#pic").removeAttr("style");
            } else {
                // Apply image styles if it's not the first image
                $("#pic").css({
                    "width": "235px",
                    "height": "300px",
                    "left": "42.8%",
                    "top": "28%"
                });
            }
            $("#pic").attr("src", preloadedImages[currentImageIndex].src).fadeIn(500);
        });
    });

    $("#btn2").click(function() {
        $("#pic").fadeOut(500, function() {
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            if (currentImageIndex === 0) {
                // Reset image styles if it's the first image
                $("#pic").removeAttr("style");
            } else {
                // Apply image styles if it's not the first image
                $("#pic").css({
                    "width": "235px",
                    "height": "300px",
                    "left": "42.8%",
                    "top": "28%"
                });
            }
            $("#pic").attr("src", preloadedImages[currentImageIndex].src).fadeIn(500);
        });
    });
});
