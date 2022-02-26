# Cyclr Code Test

## The Process

The process of this code test was to take in some JSON and convert it to
Javascript and then, manipulate the data to so that the required fields were
shown. Organised by the Key and Value pairs. I started off googling for JSON
methods and was reminded of `JSON.parse`=. 

The request was specifically to go From This:

```
{
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
}
```

To This:

```
        {
            "email": "example@example.com",
            "name": "James Dean",
            "shoesize": 10
        }

```
I've included a snipped of my solution below: 
```
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

//2. assign the new email to the value of the object
object[0].value = "example@example.com";
//3. Map over the data to create an array with the Key and Value
const getData = object.map(data => `"${data.key}": "${data.value}"`);

//4. Assign the new data to an object.
const newData = Object.assign({}, getData)
console.log(newData)
```


I knew that I'd need to start by parseing the JSON data into JavaScript using
`JSON.parse` so that it could return a javascript object. I knew I was going to
map over the data to create a new array with the fields I wanted to show using
`.map()`. I used es6 string interpolation to display the `${data.key}` and
`${data.value}`. I then did some research by reading the
[MDN Docs on Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
and found `Object.assign()` which I think suited my needs as I wanted to convert
the array `getData` into a new object.

## The Challenges

The hardest part of this challenge for me was figuring out how to change the
email address. I wanted to use `.value` property to assign it a new string of
"example@example.com" but it took me a while to realise that as the `object`
variable was set as `const` I needed to change it to `let` so that I could
reassign the value. I also realised I could use `object.value[0]` so that I
could just change the email address string without affecting the rest of the
array.

## ToDo

There's probably a better way to display this code, at the moment I'm using
global variables which isn't best practice. I think there might be a better way
to refactor this code into a function that might handle all aspects of the data
manipulation.

1. Some further research and refactoring required to see how best to display
   this code - I want to try and handle this inside a function.
