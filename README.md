# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mithraperera/lotide`

**Require it:**

`const _ = require('@mithraperera/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: takes an array and returns the first element in the array.
* `tail(...)`: takes an array and returns the last element in the array.
* `eqArrays(...)`: takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `assertArraysEqual(...)`: prints an appropriate message after comparing the two arrays.
* `without(...)`: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
* `flatten(...)`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `middle(...)`: takes in an array and returns middle most element of the array.
* `countOnly(...)`: given an array and an object, it will return an object containing counts of everything that the input object listed.
* `countLetters(...)`: the function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions(...)`: return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(...)`: scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `eqObjects(...)`: takes in 2 objects and return true if they are equal and false otherwise.
* `assertObjectsEqual(...)`: takes in 2 objects and returns true if they are equal and false otherwise.
* `map(...)`: takes an array to map and a callback function as arguments and returns a new array based on the results of the callback function.
* `takeUntil(...)`: takes an array to work with and a callback as arguments and returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `findKey(...)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.