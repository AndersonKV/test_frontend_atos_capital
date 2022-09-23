import { createElementHTML, handleEdit } from './compomnents.js';

function getApi() {
  const url = 'https://gorest.co.in/public/v2/users';
  const table = document.querySelector('tbody');
  const dataLocal = JSON.parse(localStorage.getItem('data'));

  dataLocal.map(user => {
    table.appendChild(createHTMLelement(user));
  });
  // fetch(url, { method: 'GET' })
  //   .then(res => res.json())
  //   .then(data => {
  //     // data.map(user => {
  //     //   table.appendChild(createHTMLelement(user));
  //     // });
  //   });
}

function createHTMLelement(data) {
  const tr = createElementHTML('tr');
  tr.id = data.id;

  const tdId = createElementHTML('td', 'id', data.id);

  const tdName = createElementHTML('td', 'name', data.name);

  const tdEmail = createElementHTML('td', 'email', data.email);

  const tdStatus = createElementHTML('td', 'status');

  const editButton = createElementHTML('button', null, 'Editar');
  // const deleteButton = createElementHTML('button');

  //editButton.innerText = 'Editar';

  editButton.addEventListener('click', handleEdit);

  tdStatus.append(editButton);

  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdStatus);

  return tr;
}

window.onload = getApi;
