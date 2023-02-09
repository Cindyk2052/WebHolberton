document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    //thumbnailElement.className = "small";
    thumbnailElement.addEventListener("click", function () {
        // write here
        //alert("I saw you click!");
        thumbnailElement.className = "";
        /*
        if (thumbnailElement.className == "") {
            // write here the code that will execute if the image is big
            thumbnailElement.className = "small";
        }
        else (thumbnailElement.className == "small");*/
    });



});             