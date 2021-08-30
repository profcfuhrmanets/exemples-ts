// https://fr.javascript.info/arrow-functions-basics
function hello(qui: string) {
    return console.log("Hello " + qui);
}

const bonjour = (qui: string) => console.log("Bonjour " + qui)

hello("world");
bonjour("monde");
