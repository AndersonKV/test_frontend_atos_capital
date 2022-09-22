function getApi() {
  const url = 'https://gorest.co.in/public/v2/users';
  const table = document.querySelector('tbody');

  fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      data.map(user => {
        table.appendChild(createHTMLelement(user));
      });
    });
}

const createElementHTML = param => document.createElement(param);

function createHTMLelement(data) {
  const tr = createElementHTML('tr');
  const tdName = createElementHTML('td');
  const tdId = createElementHTML('td');
  const tdEmail = createElementHTML('td');
  const tdStatus = createElementHTML('td');

  tdName.innerText = data.id;
  tdId.innerText = data.name;
  tdEmail.innerText = data.email;
  tdStatus.innerText = data.gender;

  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdStatus);

  return tr;
}

window.onload = getApi;
