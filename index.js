import { createTableData } from './compomnents.js';
import { handlePost } from './handles.js';
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
  document.querySelector('table').classList.add('hide');
  document.querySelector('form').classList.remove('hide');
  document.querySelector('.post').classList.add('hide');
});

document.querySelector('form').addEventListener('submit', handlePost);

document
  .querySelector('form button[type=button]')
  .addEventListener('click', function () {
    document.querySelector('table').classList.remove('hide');
    document.querySelector('form').classList.add('hide');
    document.querySelector('.post').classList.remove('hide');
  });

window.onload = getApi;
