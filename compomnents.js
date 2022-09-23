export function createElementHTML(html, attr, data) {
  const element = document.createElement(html);
  data ? (element.innerText = data) : null;
  attr ? (element.className = attr) : null;
  return element;
}

export function handleEdit(event) {
  const editTableField = document
    .querySelector('table')
    .querySelectorAll('input');

  const tableName = event.path[2].querySelector('.name');
  const tableEmail = event.path[2].querySelector('.email');

  const getNameValue = tableName.innerText;
  const getEmailValue = tableEmail.innerText;

  const inputOpening = event.path[2].querySelectorAll('input');

  const tableId = event.path[2].id;

  const checkSameId =
    document.querySelector('.input-name')?.parentElement?.parentElement.id;

  if (editTableField.length === 2 && tableId === String(checkSameId)) {
    const getUpdateName = inputOpening[0].value;
    const getUpdateEmail = inputOpening[1].value;

    tableName.innerText = getUpdateName;
    tableName.querySelector('input')?.remove();

    tableEmail.innerText = getUpdateEmail;
    tableEmail.querySelector('input')?.remove();

    this.innerText = 'Editar';
  } else if (editTableField.length === 0) {
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
