const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
`;

const results = zipcodes.match(/\s\d{7}\n|\s\d{3}\-\d{4,}\n/g).map(zipcode => zipcode.trim());
console.log(results);


