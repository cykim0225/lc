/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ana = {};

  for (let str of strs) {
      let sorted = str.split('').sort().join('');
      if (ana[sorted] !== undefined) {
          ana[sorted].push(str);
      } else {
          ana[sorted] = [str];
      }
  }

  return Object.values(ana);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ana = {};

  for (let str of strs) {
      let sorted = [...str].sort();
      ana[sorted] = ana[sorted] ? [...ana[sorted], str] : [str];
  }

  return Object.values(ana);
};