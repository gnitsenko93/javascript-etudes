/**
 * Created by nitseg1 on 6/13/2017.
 */

/**
 * Accumulates result of summing
 * @param {number} args number to add to sum accumulator
 * @returns {Function | number}
 * NaN if parameter is not a number;
 * sum if no parameters provided;
 * itself with accumulated results of previous calculating
 */
let sum = function f(...args) {
    try {
        if (args.length === 0) {
            return this.result;
        }
        if (typeof this.result === 'undefined')
            this.result = +args[0];
        else
            this.result = this.result + +args[0];

        return f;
    }
    catch (e) {
        return NaN;
    }
};

console.log(sum(2)(5)());
console.log(sum(10)(-3)());
console.log(sum({})(30)());

