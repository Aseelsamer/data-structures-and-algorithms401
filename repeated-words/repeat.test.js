'use strict';

const checkRepeats = require('./repeated');

describe('Repeated Words', () => {

  it('should remove special characters from a string', () => {
    let string = 'letting you. know. 2 that/ + this, is a string with no punctuation! one! solid way_ to + check & a string.';

    let newSTR = string.replace(/[\d./,!\-_&+]/g, '');

    checkRepeats(string);

    expect(newSTR).toEqual('letting you know  that  this is a string with no punctuation one solid way to  check  a string');
  });


  it('should remove extra spaces from a modified string', () => {
    let string = 'letting you know  that  this is a string with no punctuation one solid way to  check  a string';

    let nospaceSTR = string.replace(/\s{2,}/g, ' ');

    checkRepeats(string);

    expect(nospaceSTR).toEqual('letting you know that this is a string with no punctuation one solid way to check a string');
  });

  it('should convert the final string to all lowercase letters', () => {
    let string = 'Letting YOU know that this is a STRING with NO punctuation one SOLID way to check a string';

    let finalSTR = string.toLowerCase();

    checkRepeats(string);

    expect(finalSTR).toEqual('letting you know that this is a string with no punctuation one solid way to check a string');
  });
});