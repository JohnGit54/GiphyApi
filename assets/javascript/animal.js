
var ArrBtnStyClasses = ["btn btn-primary", "btn btn-success", "btn btn-danger", "btn btn-warning", "btn btn-info"];

var ArrBtn = ['Bill and Ted', 'Bugs Bunny', 'Ford Taurus SHO', 'Wedding Fails','Buzzlightyear', 'Ski Fails', 'SpongeBob', 'Squidward'];


//render the animal buttons- loop through anumal array.
function renderButtons() {
    console.log("renderbuttons");
    $('.btn-group').empty();

    for (let ix = 0; ix < ArrBtn.length; ix++) {
        // const element = array[ix];
        var btn = $('<button>');
        var styleMod = ix % ArrBtnStyClasses.length;
        btn.addClass(ArrBtnStyClasses[styleMod]);
        btn.addClass('animalclick');
        btn.text(ArrBtn[ix]);
        btn.attr("data-value", ArrBtn[ix].replace(/ /g, '+'));
        $('.btn-group').append(btn);
    }
}


//form submit button - create animal buttons.
$('#add-animal').on('click', function (event) {
    event.preventDefault();

    var newAnimal = $('#inputAnimal').val().trim();

    if (newAnimal === "") { return; }

    ArrBtn.push(newAnimal);
    $('#inputAnimal').val("");
    renderButtons();
})


//dynamically add click event to all animal buttons
$(document).on('click', '.animalclick', function () {
    // console.log($(this).attr('data-value'));
    GiphyApiCall($(this).attr('data-value'));
});


renderButtons();


//dynamic add click for images.
$(document).on('click', '.card-img-top', function (event) {
    console.log(event);
    event.preventDefault();
    if ($(this).attr('data-value') === 'still') {
        $(this).attr('src',$(this).attr('data-animate') );
        $(this).attr('data-value', 'animate');
    } else {
        $(this).attr('src',$(this).attr('data-still') );
        $(this).attr('data-value', 'still');
    }

});







