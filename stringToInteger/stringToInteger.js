let res = '';
let isNegative = false;
let j = 0;
s = s.trim();

if (!s) {
    return 0
}

if ( !(s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57) ) {
    if (s.charAt(0) === '-') {
        isNegative = true;
        j = 1;
    } else if (s.charAt(0) === '+') {
        j = 1;
    }
    else {
        return 0;
    }
}

for (let i = j; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
        res += s.charAt(i);
    } else {
        break;
    }
}

res = Number(res);
if (isNegative) {
    res *= -1;
}
if (res > Math.pow(2, 31) -1) {
    return Math.pow(2, 31) - 1;
}
if (res < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
}
return res;