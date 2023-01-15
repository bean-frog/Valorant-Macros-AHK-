
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
    string21: vandalHeavy,
};
$('#append-button').on('click', function() {
    $('#output').empty(); // clear the contents of the "output" div
    let selectedString = '';
    $('input[type=checkbox]:checked').each(function() {
        selectedString += strings[$(this).val()];
    });
    $('#output').append(selectedString);
});

let bhop =  document.getElementById("bhop");
bhop.addEventListener('click', showModal);
function showModal() {
	document.getElementById('id01').style.display='block'
}

const copyButton = document.querySelector('#copyButton');
const codeCopy = document.querySelector('#output');


copyButton.addEventListener('click', async function() {
    if(codeCopy.innerText.length == 0) {
        alert("Nothing Generated! Select some checkboxes and press 'Generate Script' first.");
    } else {

  try {
    await navigator.clipboard.writeText(codeCopy.innerText);
    alert("Script copied! Paste into a new AHK document.");
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}
});
const copyBhop = document.querySelector("#bhop");
const bhopCopy = `
F1::                 
	Suspend
	Return
*space::
	Loop                                                                                                                
	{
		GetKeyState,state,space,P
		If state = U
			Break
		Send,{space}              
		Sleep,20
	}  
`
copyBhop.addEventListener('click', async function() {
  try {
    await navigator.clipboard.writeText(bhopCopy.innerText);
    alert("Script copied! Paste into a new AHK document.");
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
});