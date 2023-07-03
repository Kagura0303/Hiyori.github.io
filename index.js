var imageUrls = [
    "./1.png",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg",
    "./8.jpg",
    "./9.jpg",
    "./10.jpg",
    "./11.jpg",
    "./12.jpg",
    "./13.jpg",
    "./14.jpg",
    "./15.jpg",
    "./16.jpg",
    "./17.jpg",
    "./18.png"
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

    // Add click event handler for the last picture
    $("#pic").on("click", function() {
        if (currentImageIndex === imageUrls.length - 1) {
            var videoUrl = "./video.mp4"; // Replace with the URL of your video

            // Open a new window or tab to display the video
            var videoWindow = window.open("", "_blank");
            videoWindow.document.write(`
                <video width="1080" height="720" controls style="margin-left:15%;">
                    <source src="./18.mp4" type="video/mp4">
                </video>
            `);
        }
    });
});
