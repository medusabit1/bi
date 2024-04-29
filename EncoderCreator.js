const fs = require('fs');

const filePath = 'test.htm';
var fileReceived = ""

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    fileReceived = data
    
  });

setTimeout(()=>{function encodeToHex(htmlString) {
    let hexEncoded = '';
  
    for (let i = 0; i < htmlString.length; i++) {
      const charCode = htmlString.charCodeAt(i).toString(16);
      hexEncoded += '\\x' + charCode.padStart(2, '0').toUpperCase();
    }
  
    return hexEncoded;
  }
  
  const hexEncodedHTML = encodeToHex(fileReceived);

fs.writeFileSync("encoded_html.txt", hexEncodedHTML);

console.log(`Done`);}, 5000)


