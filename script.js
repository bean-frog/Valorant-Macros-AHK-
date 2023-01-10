//coordinates are written for a 1920x1080 monitor with VALORANT running in fullscreen windowed
//potentially move these consts to another js file for neatness
const instaSova = `
f2::
  Click, 1083, 930
  Sleep, 200
  Click, 950, 813
return
`
//add coordinates and clicks
const instaJett = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaSage = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaSkye = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaHarbor = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaChamber = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaRaze = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaPhoenix = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaOmen = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaReyna = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaNeon = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaFade = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaBreach = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaBrimstone = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaAstra = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaKilljoy = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaViper = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaYoru = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaKayo = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`
const instaCypher = `
f2::
  Click, 
  Sleep, 200
  Click, 
return
`



const vandalHeavy = `
f3::
  Send, b
  Sleep, 300
  Click, 908, 660
  Sleep, 300
  Click, 1443, 600
  Sleep, 100
  Send, {Escape}
return
`

const instaGG = `
f4:: 
  Send, {Shift+Enter}
  Sleep, 50
  Send, g
  Sleep, 50
  Send, g
  Sleep, 100
  Send, {Enter}
return
`
const instaEz = `
f5::

return
`
const fullUtilRegular = `
f6::

return
`
const fullUtilChamber = `
f7::

return
`


function appendStrings() {
    var codeElement = document.getElementById("code");
    var strings = [];
    
    codeElement.innerHTML = "";
    
    
    if (document.getElementById("vandalHeavyMacro").checked) {
      strings.push(vandalHeavy);
    }
    if (document.getElementById("GGMacro").checked) {
      strings.push(instaGG);
    }
	if (document.getElementById("instalockSova").checked) {
      strings.push(instaSova);
    }
	 if (document.getElementById("instalockJett").checked) {
      strings.push(instaJett);
    } 
	if (document.getElementById("instalockSage").checked) {
      strings.push(instaSage);
    } 
	if (document.getElementById("instalockSkye").checked) {
      strings.push(instaSkye);
    } 
	if (document.getElementById("instalockHarbor").checked) {
      strings.push(instaHarbor);
    } 
	if (document.getElementById("instalockChamber").checked) {
      strings.push(instaChamber);
    } 
	if (document.getElementById("instalockRaze").checked) {
      strings.push(instaRaze);
    } 
	if (document.getElementById("instalockPhoenix").checked) {
      strings.push(instaPhoenix);
    } 
	if (document.getElementById("instalockOmen").checked) {
      strings.push(instaOmen);
    } 
	if (document.getElementById("instalockReyna").checked) {
      strings.push(instaReyna);
    } 
	if (document.getElementById("instalockNeon").checked) {
      strings.push(instaNeon);
    } 
	if (document.getElementById("instalockBreach").checked) {
      strings.push(instaBreach);
    } 
	if (document.getElementById("instalockBrimstone").checked) {
      strings.push(instaBrimstone);
    } 
	if (document.getElementById("instalockAstra").checked) {
      strings.push(instaAstra);
    } 
	if (document.getElementById("instalockKilljoy").checked) {
      strings.push(instaKilljoy);
    } 
	if (document.getElementById("instalockViper").checked) {
      strings.push(instaViper);
    } 
	if (document.getElementById("instalockYoru").checked) {
      strings.push(instaYoru);
    } 
	if (document.getElementById("instalockKayo").checked) {
      strings.push(instaKayo);
    } 
	if (document.getElementById("instalockCypher").checked) {
      strings.push(instaCypher);
    } 
	if (document.getElementById("instalockFade").checked) {
      strings.push(instaFade);
    }
    
    codeElement.innerHTML += strings.join("\n") + "\n";
  }



//replace with the other markdown parser thing
  fetch('https://raw.githubusercontent.com/bean-frog/Valorant-Macros-AHK-/main/INSTRUCTIONS.md')
  .then(response => response.text())
  .then(markdown => {
    // parse the markdown
    const html = marked(markdown);

    // get the markdown element
    const markdownElement = document.getElementById('instructionsMD');

    // insert the parsed HTML into the markdown element
    markdownElement.innerHTML = html;
  });


