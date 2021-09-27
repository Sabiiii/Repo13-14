// Get the modal
var myImg = [id];
id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myImg[1];
myImg[2];
myImg[3];
myImg[4];
myImg[5];
myImg[6];
myImg[7];
myImg[8];
myImg[9];
myImg[10];


function myImgFunction() {
    myImg[myImg.id].style.display = "block";
    if (myImg.style.display === block);
    return myImg;

    return myImg[id];

};

console.log(myImgFunction(myImg));

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

