
const fs = require('fs');
const transformData = require('./transformData');

const json = fs.readFileSync('./rawData.json');


test('It works', () => {
    let result = transformData(JSON.parse(json));

    let expected = JSON.stringify({
        email: 'example@example.com',
        name: 'James Dean',
        shoesize: 10
    }, null, 2)

    expect(result).toBe(expected)
})


test('no params', () => {
    let result = transformData();

    let expected = JSON.stringify({}, null, 2)

    expect(result).toBe(expected)
})

test('Handles empty objct', () => {
    let result = transformData({});

    let expected = JSON.stringify({}, null, 2)

    expect(result).toBe(expected)
})

test('Errors when passed a number', () => {
    expect(() => transformData(1)).toThrowError('Error: transformData expects an object. Received: 1')
})