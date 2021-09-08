const form = document.querySelector('#form-select');
const placeTable = document.querySelector('.place-table');

const paymentMethodsInfo = [
  {
    id: 1,
    name: 'accentpay_webmoney_payin(WebMoney)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'accentpay_webmoney_payout(WebMoney)', ccy: ['USD'], min: [0.1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['USD', 'RUB'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
  {
    id: 2,
    name: 'nameeeeee',
    tableInfo: [
      {
        type: 'Neposit', methods: 'dsadaad(WebMoney)', ccy: ['USD'], min: [0.1], max: [123]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['USD', 'RUB'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }
];

const select = createSelect(placeTable, paymentMethodsInfo);
form.append(select);
printTable(placeTable, select, paymentMethodsInfo);

function createSelect(whereToInsertNode, infoArr) {
  const select = document.createElement('select');
  select.setAttribute('name', 'crypto-select');
  select.setAttribute('id', 'crypto-select');
  const infoNames = infoArr.map(item => {
    return `<option value='${item.id}'>${item.name}</option>`;
  });

  select.addEventListener('change', (e) => {
    e.preventDefault();
    printTable(whereToInsertNode, select, infoArr);
  });

  select.innerHTML = infoNames.join('');
  
  return select;
}

function createTable(objPayment) {
  const table = document.createElement('table');
  table.classList.add('table')

  const TrLines = objPayment.tableInfo.map(item => `
    <tr>
      <td>${item.type}</td>
      <td>${item.methods}</td>
      <td>${item.ccy.join(', ')}</td>
      <td>${item.min.join(', ')}</td>
      <td>${item.max.join(', ')}</td>
    </tr>
  `).join('');

  table.innerHTML = `
    <thead>
      <tr>
        <th>Type</th>
        <th>Outgoing methods</th>
        <th>Ccy</th>
        <th>Min amount</th>
        <th>Max amount</th>
      </tr>
    </thead>
    <tbody>
      ${TrLines}
    </tbody>
  `;

  return table;
}

function printTable(whereToInsertNode, select, infoArr) {
  const value = activeOptionValue(select);
  const objPayment = findPaymentById(value, infoArr);
  const table = createTable(objPayment);
  whereToInsertNode.innerText = '';
  whereToInsertNode.append(table);
}

function activeOptionValue(selectNode) {
  const selectedIdx = selectNode.selectedIndex;
  const activeOptionNode = selectNode.options[selectNode.selectedIndex];
  const value = activeOptionNode.value; // value у выбранного option
  if (!isNaN(Number(value))) {
    return Number(value);
  }
  return value;
}

function findPaymentById(id, infoArr) {
  if (isNaN(Number(id))) {
    return false;
  }

  return infoArr.find(item => item.id === id);
}


// const arr = [1, 3, 9, 30];
// const arr2x = arr.map(item => item * 2);
// const arr2x1 = arr.map((item) => item * 2);
// const arr2x2 = arr.map((item, i, arr) => item * 2);
// const arr2x3 = arr.map((item) => {
//   return item * 2;
// });
// const arr2x4 = arr.map((item, i, arr) => {
//   return item * 2;
// });
// const arr2x5 = arr.map(function(item, i, arr) {
//   return item * 2;
// });
// const arr2x6 = arr.map(function(item) {
//   return item * 2;
// });
// console.log(arr2x);