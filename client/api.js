// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */
function get(input){
  return fetch(input)
  .then((res)=>res.json());
}


// define the api-client object to be exported
const api = {
  
};

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
