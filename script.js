const data = `{
    "attributes": [
        {
            "key": "email",
            "value": "jamesd@example.com"
        },
        {
            "key": "name",
            "value": "James Dean"
        },
        {
            "key": "shoesize",
            "value": 10
        }
    ]
}`

//1. Parse the JSON into a Javascript Object
let object = JSON.parse(data).attributes;

//2. Assign the new email to the value of the object
object[0].value = "example@example.com";
//3. Map over the data to create an array with the Key and Value
const getData = object.map(data => `"${data.key}": "${data.value}"`);

//4. Assign the new data to an object, and convert it back into JSON using JSON.stringify
const newData = JSON.stringify(Object.assign({}, getData));
console.log(newData)


