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
  
  axios
    .get(`${BASE_URL}${luckyNums(numbers)}`)
    .then((res) => {
      for (let key of Object.keys(res.data)) {
          result = res.data[key];
          handleResponse(result);
      }
    })
    .catch((err) => console.log(err));
           
            


  //  container to hold API reponses
let fourFactPromises = [];
// iterate json reponse for multiple facts retrieved
for (let i = 1; i < 5; i++) {
  fourFactPromises.push(
    axios.get(`${BASE_URL}${favNum}?json`)
  );
}
// takes array of promises and returns a new promise
Promise.all(fourFactPromises)
  .then((numFacts) => {
      for(let res of numFacts) {
          result = res.data.text;
          handleResponse(result);
      }
  }
  )
  .catch(err => console.log(err));



//   HELPERS
// render responses to page
function handleResponse(result) {
    $('#results').append(`<p>Number Fact: ${result}`)  
};

