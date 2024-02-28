/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const workTable ={
    name: 'Desk',
    color: 'black',
    legs: 4,
    laptop: {
        name: 'mac',
        color: 'gray',
        laptopOn: false,
        onOrOff: function (isOnOrOff) {
            this.laptopOn = isOnOrOff;
        }
    },
}
console.log("My work table: ", workTable);  