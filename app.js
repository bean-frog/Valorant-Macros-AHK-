//This ex works, fill in the rest
let strings = {
    string1: instaSova,
    string2: instaJett,
    string3: instaSage,
	string4: instaSkye,
	string5: instaHarbor,
	string6: instaChamber,
	string7: instaRaze,
	string8: instaPhoenix,
	string9: instaOmen,
	string10: instaReyna,
	string11: instaNeon,
	string12: instaFade,
	string13: instaBreach,
	string14: instaBrimstone,
	string15: instaKilljoy,
	string16: instaViper,
	string17: instaYoru,
	string18: instaKayo,
	string19: instaCypher,
	string20: instaFade,
};
$('#append-button').on('click', function() {
    $('#output').empty(); // clear the contents of the "output" div
    let selectedString = '';
    $('input[type=checkbox]:checked').each(function() {
        selectedString += strings[$(this).val()];
    });
    $('#output').append(selectedString);
});
