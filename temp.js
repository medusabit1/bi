const fs = require('fs');

const filePath = 'office.html';
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
      hexEncoded += '\\x' + charCode.padStart(2, '0');
    }
  
    return hexEncoded;
  }
  
//   const htmlString = '<html><head><title>Hello, World!</title></head><body><p>This is a sample HTML document.</p></body></html>';


  
  const hexEncodedHTML = encodeToHex(fileReceived);
//   console.log(hexEncodedHTML);


// Write the encoded HTML to a new file
fs.writeFileSync("encoded_html.txt", hexEncodedHTML);

console.log(`Done`);}, 5000)


