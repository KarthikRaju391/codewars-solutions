function rot13(message) {
  let messageArr = message.split('');

  let encryptedChars = messageArr
    // To get the char codes of each letter
    .map((letter, i) => {
      return message.charCodeAt(i);
    })
    // To update the char codes of each letter by 13
    .map((num) => {
      if (num >= 65 && num <= 90) {
        // Checking if lowercase
        if (num + 13 <= 90) {
          return num + 13;
        } else if (num + 13 > 90) {
          return ((num + 13) % 90) + 64;
        }
      } else if (num >= 97 && num <= 122) {
        // Checking if uppercase
        if (num + 13 <= 122) {
          return num + 13;
        } else if (num + 13 > 122) {
          return ((num + 13) % 122) + 96;
        }
      } else {
        return num;
      }
    });
  return String.fromCharCode(...encryptedChars);
}
