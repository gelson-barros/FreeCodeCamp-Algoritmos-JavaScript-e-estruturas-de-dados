// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach((a) => newArray.push(callback(a)));
    // Add your code above this line
    return newArray;
};

// Array.prototype.myMap = function (callback, arr = [], i = 0) {
//     return i < this.length ? this.myMap(callback, arr.concat(callback(this[i])), i + 1) : arr;
// };

var new_s = s.myMap(
    function (item) {
        return item * 2;
    },
    [1, 2, 3],
    0
);

console.log(new_s);
