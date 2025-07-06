const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')
const eqObjects = require('./eqObjects')
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,

};