const head = require("../head")
const assertEqual = require("../assertEqual")

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([10, 20, 30]), 30);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");

assertEqual(head([]), undefined);