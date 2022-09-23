import {
  token,
  findById,
  checkIsValueUpdateChange,
  openingInput,
  closedInput,
} from './util.js';

export function handlePost(data) {
  const url = 'https://gorest.co.in/public/v2/users';

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    body: data,
  })
    .then(res => {
      console.log(res);

      if (res.status === 201) {
        alert('post feito com sucesso');
      }

      return res.json();
    })
    .then(data => {
      console.log(data);
      // alert(data.message)
    })
    .catch(err => {
      alert(err.message);
    });
}

export async function handleEdit(event) {
  const getAllInputAvailable = document
    .querySelector('table')
    .querySelectorAll('input');

  const tableRows = event.path[2];

  const id = String(event.path[2].id);

  const checkIdFromTableIsEqual = String(
    document.querySelector('input')?.parentElement?.parentElement.id
  );

  const onlyTwoInputShouldActived =
    getAllInputAvailable.length === 2 && id === checkIdFromTableIsEqual;

  if (onlyTwoInputShouldActived) {
    const { name, email } = closedInput(tableRows, this);

    const find = await findById(id);

    if (checkIsValueUpdateChange(find[0], name, email)) {
      return;
    }

    const data = {
      id,
      name,
      email,
    };

    handleUpdate(data);
  } else if (!getAllInputAvailable.length) {
    openingInput(tableRows, this);
  }
}

export function handleUpdate(data) {
  const url = 'https://gorest.co.in/public/v2/users/' + data.id;

  fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    body: data,
  })
    .then(res => {
      console.log(res);

      if (res.status === 200) {
        alert('atualizado com sucesso');
      }

      return res.json();
    })
    .then(data => {
      // alert(data.message)
    })
    .catch(err => {
      alert(err.message);
    });
}

export function handleDelete() {
  const id = this.parentElement.parentElement.id;

  const url = 'https://gorest.co.in/public/v2/users/' + id;

  fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(res => {
      if (res.status === 204) {
        alert('tabela deletada');
        document.getElementById(id).remove();
      }
    })
    .catch(err => {
      alert(err.message);
    });
}
