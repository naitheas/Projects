// API url
const BASE_URL = 'http://numbersapi.com/';

// search params
const favNum = 16;
const numbers = [42,5,16,33,1];


function luckyNums(arr) {
    let num = '';
    for (let i = 0; i < arr.length - 1; i++) {
      num += `${arr[i]},`;
    }
    num += `${arr[arr.length - 1]}`;
    return num;
  }

async function favNums() {
  try {
    let { data } = await axios.get(`${BASE_URL}${luckyNums(numbers)}`);
    for(let key of Object.keys(data)) {
      result = data[key]
      handleResponse(result)
    }
  } catch(e) {
    console.log("Something went wrong",e);
  }
}
favNums();
      
            
async function getFacts(number) {
let fourFactPromises = [];
try {
  for (let i = 1; i < 5; i++) {
  fourFactPromises.push(
    axios.get(`${BASE_URL}${number}?json`)
  );
}
let numFacts = await Promise.all(fourFactPromises);
for(let res of numFacts) {
  result = res.data.text
  handleResponse(result);
}} catch(e){
  console.log("Something went wrong",e);
}};
getFacts(16)



//   HELPERS
// render responses to page
function handleResponse(result) {
    $('#results').append(`<p>Number Fact: ${result}`)  
};

