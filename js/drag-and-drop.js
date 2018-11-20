window.onload = initialize;

var image = ["linux-img", "windows-img"]; 

function initialize(){
    for(var i = 0; i < image.length; i++) {
        document.getElementById(image[i]).addEventListener("drop", drop);
        document.getElementById(image[i]).addEventListener("dragover", allowDrop);
        document.getElementById(image[i]).addEventListener("dragstart", drag);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("dragging-image-id", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var draggingImageId = ev.dataTransfer.getData("dragging-image-id");
    var draggingImage = document.getElementById(draggingImageId);
    var sourceBox = draggingImage.parentElement;

    var substitutedImage = ev.target;
    var destinationBox = substitutedImage.parentElement;

    destinationBox.appendChild(draggingImage);
    sourceBox.appendChild(substitutedImage);
}