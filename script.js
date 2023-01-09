function appendStrings() {
    var codeElement = document.getElementById("code");
    var strings = [];
    
    // Clear the code element
    codeElement.innerHTML = "";
    
    if (document.getElementById("instalockSova").checked) {
      strings.push(`
f2::
  Click, 1083, 930
  Sleep, 400
  Click, 950, 813
return

      `);
    }
    if (document.getElementById("vandalHeavyMacro").checked) {
      strings.push(`
f3::
  Send, b
  Sleep, 300
  Click, 908, 660
  Sleep, 300
  Click, 1443, 600
  Sleep, 100
  Send, {Escape}
return
      `);
    }
    if (document.getElementById("GGMacro").checked) {
      strings.push(`
f4:: 
  Send, {Shift+Enter}
  Send, g
  Sleep, 50
  Send, g
  Sleep, 100
  Send, {Enter}
return
      `);
    }
    
    codeElement.innerHTML += strings.join("\n") + "\n";
  }

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



