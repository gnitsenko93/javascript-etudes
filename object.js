/**
 * Created by nitseg1 on 6/13/2017.
 */

/**
 * Custom string processor that uses . as a splitter
 * @param {string} str - a string to convert to an object
 * @returns {Object} object representing provided string
 */
function fromStringToObject(str) {
    try {
        if (typeof str === 'string') {
            if (str.length === 0) {
                return null;
            }
            const dotIndex = str.indexOf('.');
            if (dotIndex === -1) {
                return {
                    [str]: null
                }
            }
            else {
                const strBeforeDot = str.substring(0, dotIndex);
                const strAfterDot = str.substr(dotIndex + 1);

                return {
                    [strBeforeDot]: fromStringToObject(strAfterDot)
                }
            }
        }
    }
    catch (e) {
        return undefined;
    }
}

/**
 * Converts a string to an object
 * @param {string} str - string to convert to object
 * @param {function} processor - function to process string
 * @returns {Object|undefined} object representing provided string, undefined otherwise
 */
function process(str, processor) {
    try {
        return processor(str);
    }
    catch (e) {
        return undefined;
    }
}

const obj = process('That.rug.really.tied.the.room.together,.did.it.not?', fromStringToObject);

const nullObj = process('', fromStringToObject);

const notAString = {};
const undefinedObj = process(notAString, fromStringToObject);

const manuallyProcessedObj = process('I want to work in a great team!', (obj) => {
   return `- ${obj}\n- Yes, you are in the right place.`;
});


console.log(obj);
console.log(nullObj);
console.log(undefinedObj);
console.log(manuallyProcessedObj);