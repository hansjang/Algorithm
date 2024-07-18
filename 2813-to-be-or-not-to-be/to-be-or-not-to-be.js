/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expectedVal) {
            if (val !== expectedVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.log(e.message); // "Equal"
}

try {
    console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (e) {
    console.log(e.message); // "Equal"
}

try {
    console.log(expect(5).toBe(null)); // throws "Not Equal"
} catch (e) {
    console.log(e.message); // "Not Equal"
}

try {
    console.log(expect(5).notToBe(null)); // true
} catch (e) {
    console.log(e.message); // "Equal"
}
