const BASE_URL = 'https://thinkful-list-api.herokuapp.com/adam';

const getItems = function()  {
  fetch(`${BASE_URL}/items`)
    .then (res => res.json())
    .then (resonseJson => console.log(resonseJson));
  return Promise.resolve('A successful response!');
}

const createItem= function(name) {
  const newItem = JSON.stringify( {
    name: name
  });
  
  fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem 
  })
}



export default {
  getItems,
  createItem
};