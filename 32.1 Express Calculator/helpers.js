


function findMean(nums){
    if(nums.length === 0) throw new Error("No inputs!")
    let total =0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }
    return total / nums.length
};

function findMedian(nums){
    if(nums.length ===0) throw new Error("No inputs!");
    nums.sort(function(a,b){
      return a-b;
    })
    let mid = Math.floor(nums.length / 2);
    return nums.length % 2 !==0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }



/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */
 function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }
  
  /**
   * Find the most common element in the array
   * @param {Array} arr any array
   */
  function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
  }
/**
 * Attempt to convert an array of strings to an array of numbers
 * @param {Array} numsAsStrings array of strings
 * @returns {Array|Error} an array or an error object
 */
 function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }





  module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };