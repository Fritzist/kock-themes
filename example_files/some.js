const some = document.getElementById("some");

const myArray = [
    "abc", 123, 2423, "bcde"
];

const params = new URLSearchParams(window.locationssss.search);

const myObject = {
    name: "John",
};

class MyClass {
    name;

    constructor(name) {
        this.name = name;
    }

    someClassMethod() {
        return this.name;
    }
}
function num2bin(number) {
    return number.toString(2);

}

function rickroll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

// Print out 69 in binary
console.log(num2bin(69));

function abcde() {
    try {
        some.remove();
        console.log("Removed some");
    } catch(e) {
        console.error("Error while removing some: ", e);
    }
}