const BASE_URL = 'https://thinkful-list-api.herokuapp.com/adam';

const getItems = function () {
  return fetch(`${BASE_URL}/items`)
}

const createItem = function (name) {
  const newItem = JSON.stringify({
    name: name
  });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};



export default {
  getItems,
  createItem
};