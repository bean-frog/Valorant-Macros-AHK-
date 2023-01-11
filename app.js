//This ex works, fill in the rest
let strings = {
    string1: instaSova,
    string2: instaJett,
    string3: "Option 3 selected\n"
};
$('#append-button').on('click', function() {
    $('#output').empty(); // clear the contents of the "output" div
    let selectedString = '';
    $('input[type=checkbox]:checked').each(function() {
        selectedString += strings[$(this).val()];
    });
    $('#output').append(selectedString);
});