const BASE_URL = 'https://thinkful-list-api.herokuapp.com/adam';

const getItems = function()  {
  fetch(`${BASE_URL}/items`)
    .then (res => res.json())
    .then (resonseJson => console.log(resonseJson));
  return Promise.resolve('A successful response!');
}

export default {
  getItems
};