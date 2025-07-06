const head = require("../head")
const assertEqual = require("../assertEqual")

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([10, 20, 30]), 10);
assertEqual(head(["Welcome", "To", "Lighthouse", "Labs"]), "Welcome");

assertEqual(head([]), undefined);