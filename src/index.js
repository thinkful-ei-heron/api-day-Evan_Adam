import $ from 'jquery';

import api from './api';
import store from './store';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    
    });
    
  console.log(api.BASE_URL);
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
