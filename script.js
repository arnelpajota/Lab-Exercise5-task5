function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
            const baseCode = char.toUpperCase() === char ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            return String.fromCharCode((char.charCodeAt(0) - baseCode + shift) % 26 + baseCode);
        }
        return char;
    }).join('');
}

var inputString = prompt("Enter a string to be encrypted:");
var shiftAmount = parseInt(prompt("Enter the shift amount for encryption:"));

var encryptedString = encrypt(inputString, shiftAmount);
console.log("Encrypted String:", encryptedString);

var decryptShift = 26 - shiftAmount; // Reverse the shift for decryption
var decryptedString = encrypt(encryptedString, decryptShift);
console.log("Decrypted String:", decryptedString);
