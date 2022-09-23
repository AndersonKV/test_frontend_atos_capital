import { createElementHTML } from './compomnents.js';
import { handleEdit, handleDelete } from './handles.js';
import { token } from './util.js';

function getApi() {
  const url = 'https://gorest.co.in/public/v2/users?access-token' + token;
  const table = document.querySelector('tbody');

  fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      data.map(user => {
        table.appendChild(createTableData(user));
      });
    });
}

function createTableData(data) {
  const tr = createElementHTML('tr');
  tr.id = data.id;

  const tdId = createElementHTML('td', null, data.id);

  const tdName = createElementHTML('td', 'name', data.name);

  const tdEmail = createElementHTML('td', 'email', data.email);

  const tdStatus = createElementHTML('td', 'status');

  const editButton = createElementHTML('button', null, 'Editar');
  const deleteButton = createElementHTML('button', null, 'Excluir');

  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);

  tdStatus.append(editButton, deleteButton);

  tr.append(tdId, tdName, tdEmail, tdStatus);

  return tr;
}

window.onload = getApi;
