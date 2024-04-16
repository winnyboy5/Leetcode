/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let i=0, j=0, m = new Map(), len = 0;
    while(j < s.length){
        m.set(s[j], (m.get(s[j]) || 0 ) + 1)
        while((j-i+1) !== m.size){
            m.set(s[i], (m.get(s[i]) || 0 ) - 1)
            if(m.get(s[i]) === 0) m.delete(s[i])
            i++;
        }
        len = Math.max(len, j-i+1)
        j++;
    }
    return len;
};