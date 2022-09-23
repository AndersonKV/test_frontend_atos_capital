import { token } from './util.js';
import { createElementHTML } from './compomnents.js';

export function handleEdit(event) {
  const getAllInputAvailable = document
    .querySelector('table')
    .querySelectorAll('input');

  const inputsFromTabletEdit = event.path[2];

  const tableName = inputsFromTabletEdit.querySelector('.name');
  const tableEmail = inputsFromTabletEdit.querySelector('.email');

  const getNameValue = tableName.innerText;
  const getEmailValue = tableEmail.innerText;

  const inputOpening = inputsFromTabletEdit.querySelectorAll('input');

  const id = event.path[2].id;

  const checkIdFromTableIsEqual =
    document.querySelector('input')?.parentElement?.parentElement.id;

  if (
    getAllInputAvailable.length === 2 &&
    id === String(checkIdFromTableIsEqual)
  ) {
    const getUpdateName = inputOpening[0].value;
    const getUpdateEmail = inputOpening[1].value;

    tableName.innerText = getUpdateName;
    tableName.querySelector('input')?.remove();

    tableEmail.innerText = getUpdateEmail;
    tableEmail.querySelector('input')?.remove();

    this.innerText = 'Editar';
  } else if (getAllInputAvailable.length === 0) {
    tableName.innerText = '';
    tableEmail.innerText = '';

    const inputName = createElementHTML('input', 'input-name', null);
    const inputEmail = createElementHTML('input', 'input-email', null);

    tableName.append(inputName);
    tableEmail.append(inputEmail);

    tableName.querySelector('input').value = getNameValue;
    tableEmail.querySelector('input').value = getEmailValue;

    this.innerText = 'Atualizar';
  }
}

export function handleDelete() {
  const id = this.parentElement.parentElement.id;
  const url = 'https://gorest.co.in/public/v2/users/w' + id;

  const myHeaders = new Headers({
    Authorization: token,
    'Access-Control-Allow-Origin': '*',
  });

  fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(res => {
      if (res.status === 204) {
        alert('sucesso');
        document.getElementById(id).remove();
        return;
      }

      return res.json();
    })
    .then(data => alert(data.message))
    .catch(err => {
      console.log('err');
      alert(err.message);
    });
}
