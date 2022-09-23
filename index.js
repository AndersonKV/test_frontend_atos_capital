import { createElementHTML, createTableData } from './compomnents.js';
import { handleEdit, handleDelete, onSubmit, handlePost } from './handles.js';
import { token } from './util.js';

function getApi() {
  const url = 'https://gorest.co.in/public/v2/users?access-token' + token;
  const table = document.querySelector('tbody');

  fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data));

      data.map(user => {
        table.appendChild(createTableData(user));
      });
    });
}

document.querySelector('.post').addEventListener('click', function () {
  document.querySelector('table').classList.add('hide-table');
});

document.querySelector('form').addEventListener('submit', handlePost);

window.onload = getApi;
