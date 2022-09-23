import { createElementHTML } from './compomnents.js';

export const token =
  '15d6fd599342b31ba2d6fdb8501028bcb012173c9d654604c2a7ffaabe1b9c9a';

export async function findById(id) {
  const getDataLocalStorage = JSON.parse(localStorage.getItem('data'));
  return await getDataLocalStorage.filter(user => user.id === Number(id));
}

export function checkIsValueUpdateChange(data, tableName, tableEmail) {
  console.log(data.email === tableEmail, data.name === tableName);

  if (data.email === tableEmail && data.name === tableName) {
    return true;
  } else {
    return false;
  }
}

export function openingInput(tableRows, context) {
  const tableName = tableRows.querySelector('.td-name');
  const tableEmail = tableRows.querySelector('.td-email');

  const getNameValue = tableName.innerText;
  const getEmailValue = tableEmail.innerText;

  tableName.innerText = '';
  tableEmail.innerText = '';

  const inputName = createElementHTML('input', 'input-name', null);
  const inputEmail = createElementHTML('input', 'input-email', null);

  tableName.append(inputName);
  tableEmail.append(inputEmail);

  tableName.querySelector('input').value = getNameValue;
  tableEmail.querySelector('input').value = getEmailValue;

  context.innerText = 'Atualizar';
}

export function closedInput(tableRows, button) {
  const [inputName, inputEmail] = tableRows.querySelectorAll('input');

  tableRows.querySelector('.td-name').innerText = inputName.value;
  inputName?.remove();

  tableRows.querySelector('.td-email').innerText = inputEmail.value;
  inputEmail?.remove();

  button.innerText = 'Editar';

  return { name: inputName.value, email: inputEmail.value };
}
