//coordinates are written for a 1920x1080 monitor with VALORANT running in fullscreen windowed
//potentially move these consts to another js file for neatness


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
	if (document.getElementById("instaSova").checked) {
      strings.push(instaSova);
    }
	 if (document.getElementById("instaJett").checked) {
      strings.push(instaJett);
    } 
	if (document.getElementById("instaSage").checked) {
      strings.push(instaSage);
    } 
	if (document.getElementById("instaSkye").checked) {
      strings.push(instaSkye);
    } 
	if (document.getElementById("instaHarbor").checked) {
      strings.push(instaHarbor);
    } 
	if (document.getElementById("instaChamber").checked) {
      strings.push(instaChamber);
    } 
	if (document.getElementById("instaRaze").checked) {
      strings.push(instaRaze);
    } 
	if (document.getElementById("instaPhoenix").checked) {
      strings.push(instaPhoenix);
    } 
	if (document.getElementById("instaOmen").checked) {
      strings.push(instaOmen);
    } 
	if (document.getElementById("instaReyna").checked) {
      strings.push(instaReyna);
    } 
	if (document.getElementById("instaNeon").checked) {
      strings.push(instaNeon);
    } 
	if (document.getElementById("instaBreach").checked) {
      strings.push(instaBreach);
    } 
	if (document.getElementById("instaBrimstone").checked) {
      strings.push(instaBrimstone);
    } 
	if (document.getElementById("instaAstra").checked) {
      strings.push(instaAstra);
    } 
	if (document.getElementById("instaKilljoy").checked) {
      strings.push(instaKilljoy);
    } 
	if (document.getElementById("instaViper").checked) {
      strings.push(instaViper);
    } 
	if (document.getElementById("instaYoru").checked) {
      strings.push(instaYoru);
    } 
	if (document.getElementById("instaKayo").checked) {
      strings.push(instaKayo);
    } 
	if (document.getElementById("instaCypher").checked) {
      strings.push(instaCypher);
    } 
	if (document.getElementById("instaFade").checked) {
      strings.push(instaFade);
    }
    
    codeElement.innerHTML += strings.join("\n") + "\n";
  }

/*
  fetch('https://raw.githubusercontent.com/bean-frog/Valorant-Macros-AHK-/main/INSTRUCTIONS.md')
  .then(response => response.text())
  .then(markdown => {
    // Create a new Showdown converter
    var converter = new showdown.Converter();

    // Convert the Markdown to HTML
    var html = converter.makeHtml(markdown);

    // Get the div element
    var div = document.getElementById('instructionsMD');

    // Add the HTML to the div
    div.innerHTML = html;
  });

*/
