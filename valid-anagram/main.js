/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freqMap_s = {};
    let freqMap_t = {};
    let freqMap = {};
    let prevKey = null;

    // Main Test
    // freqMap for s
    for (let i of s) {
        if (freqMap[i]) {
            freqMap[i] += 1
            freqMap_s[i] += 1
        } else {
            freqMap[i] = 1
            freqMap_s[i] = 1
        }
    }

    // freqMap for t
    for (let i of t) {
        if (freqMap[i]) {
            freqMap[i] += 1
                if (freqMap_t[i]) {
                    freqMap_t[i] += 1;
                } else {
                    freqMap_t[i] = 1;
                }
        } else {
            freqMap[i] = 1
            freqMap_t[i] = 1
        }
    }

    // Check values Test
    for (let i of Object.values(freqMap)) {
        if (i < 2) {
            console.log(`value of i: ${i}`);
            return false;
        }
    }

    // Check keys Test 
    for (let key in freqMap_s) {
        console.log(key);
        console.log(freqMap_s[key]);
        console.log(freqMap_t[key] || 0);
        if (freqMap_s[key] !== freqMap_t[key] || 0) {
            return false;
        }
    }

    // Length Test
    if (s.length == t.length) return true;

    return false;
};

