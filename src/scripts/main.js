'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const listUl = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const item = document.createElement('li');

      item.textContent = key;
      listUl.appendChild(item);

      if (Object.keys(data[key]).length > 0) {
        createTree(item, data[key]);
      }
    }
  }
  element.appendChild(listUl);
}

createTree(tree, food);
