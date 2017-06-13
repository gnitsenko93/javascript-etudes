/**
 * Created by nitseg1 on 6/13/2017.
 */

/**
 * Accepts a string and returns sorted letters
 * @param {string} str - a string to process
 * @returns {string|undefined} sorted string in case of success or undefined otherwise
 */
function sortedLetters(str) {
    try {
        if (typeof str === 'string') {
            return str.toLowerCase().split('').sort().join('');
        }
    }
    catch (error) {
        return undefined;
    }
}

/**
 * Accepts an array of string and returns grouped string based on anagram principle
 * @param {Array<string>} arr - an array of strings to process
 * @returns {Array<Array<string>>|undefined}
 */
function groupAnagrams(arr) {
    try {
        if (Array.isArray(arr)) {
            const result = [];
            for (let i = 0; i < arr.length; i++) {
                const pattern = sortedLetters(arr[i]);
                const anagrammsForPattern = [arr[i]];
                for (let j = 0; j < arr.length; j++) {
                    if (i !== j) {
                        const sortedWord = sortedLetters(arr[j]);
                        if (pattern === sortedWord) {
                            anagrammsForPattern.push(arr[j]);
                            arr.splice(j--, 1);
                        }
                    }
                }
                result.push(anagrammsForPattern);
                arr.splice(i--, 1);
            }
            return result;
        }
    }
    catch (error) {
        return undefined;
    }
}

console.log(groupAnagrams([
        'hello',
        'olleh',
        'kingmutha',
        'muthaking',
        'killingspree',
        'speeringillk',
        'killingspree',
        'sorry'
    ]
));

console.log(groupAnagrams({}));