$(document).ready(readyNow);

function readyNow() {
    $('#generateButton').on('click', addDivToDOM);
    $('#swapButton').on('click', swapButtonClick);
    $('#deleteButton').on('click', deleteButtonClick);
    

};//end ready now function


var clickCounter = 0;
function addDivToDOM () {
    clickCounter += 1;
    $('#whereGeneratedDivsGo').append('<div id="divByGenerate"><p>' + 'you have clicked generate button:'+ clickCounter + 'times' +
    '</p> <button id="swapButton" onclick= swapButtonClick();>Swap</button><button id="deleteButton" onclick = deleteButtonClick();>Delete</button></div>')
};//end generate function

function swapButtonClick() {
    console.log('this button works');
    $('#divByGenerate').css('background', 'yellow');
    //I've tried messing with every toggle method i could find trying
    //  to get it to turn back to red with no success
    //  I just used the css method so the button will have some sort of functionality
    // $('#swapButton').click(function() {
    //     $('#divByGenerate').addClass('back-yellow');
    // });
    // $("#swapButton").on("click", function() {
    //     $(this).toggleClass('back-red');
    // });


    
}; //end swap function

function deleteButtonClick () {
    console.log('this button works');
    document.getElementById('divByGenerate').remove();
    

};//end delete function