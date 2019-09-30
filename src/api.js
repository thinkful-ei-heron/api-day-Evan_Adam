const BASE_URL = 'https://thinkful-list-api.herokuapp.com/adam';

const getItems = function () {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({
    name: name
  });
  return listApiFetch(`${BASE_URL}/items`, 'POST', newItem);
};

const updateItem = function (id, updateData) {
  return listApiFetch(`${BASE_URL}/items/${id}`, 'PATCH', JSON.stringify(updateData)
  );
};

const deleteItem = function (id) {
  return listApiFetch(`${BASE_URL}/items/${id}`, 'DELETE');
};

const listApiFetch = function(URL, method, body) {
  let error;
  return fetch(URL, {method, body, headers:{'Content-Type':'application/json'}})
    .then(res => {
      if (!res.ok) {
        error = {code: res.status};
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};


export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};