import { handleEdit, handleDelete } from './handles.js';

export function createElementHTML(html, attr, data) {
  const element = document.createElement(html);
  data ? (element.innerText = data) : null;
  attr ? (element.className = attr) : null;
  return element;
}

export function createTableData(data) {
  const tr = createElementHTML('tr');
  tr.id = data.id;

  const tdId = createElementHTML('td', null, data.id);

  const tdName = createElementHTML('td', 'td-name', data.name);

  const tdEmail = createElementHTML('td', 'td-email', data.email);

  const tdStatus = createElementHTML('td', 'td-status');

  const editButton = createElementHTML('button', null, 'Editar');
  const deleteButton = createElementHTML('button', null, 'Excluir');

  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);

  tdStatus.append(editButton, deleteButton);

  tr.append(tdId, tdName, tdEmail, tdStatus);

  return tr;
}
