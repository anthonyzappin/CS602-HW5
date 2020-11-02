"use strict";

const readButton = document.getElementById('readButton')
const readLayer = document.getElementById('readLayer')
const add = document.getElementById('addButton')
const search = document.getElementById('searchButton')
const deleted = document.getElementById('deleteButton')

const addPanel = document.getElementById('addPanel')
const deletePanel = document.getElementById('deletePanel')


// const form = document.getElementById('form')
const submit = document.getElementById('submit')
const deleteButton = document.getElementById('deleteButton')
const deleteSubmit = document.getElementById('deleteSubmit')
const deleteInput = document.getElementById('deleteInput')
let deleteFullInputValue = ""

let form = new Map();
let create = {}

function mapToJson(map) {
    return JSON.stringify([...map]);
}

let response = {'foo': 'bar'}
let jsonResult = {}

const config = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const makeRequest = async () => {
    const config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

  response = await fetch('https://us-central1-cs602-hw5.cloudfunctions.net/read', config);
  jsonResult = await response.json();
  console.log("read data was " + JSON.stringify(jsonResult));
  console.log('restaurant request attempt made');
}

function mapToJson(map) {
    return JSON.stringify([...map]);
}

let jsonObject = {
    "name"  :  document.getElementById('name').value
    // "street"  :  document.getElementById('street').value,
    // "zip"  :  document.getElementById('zip').value,
    // "borough"  :  document.getElementById('borough').value,
    // "cuisine"  :  document.getElementById('cuisine').value,
    // "grade"  :  document.getElementById('grade').value,
    // "zip"  :  document.getElementById('zip').value,
  }

const submitRequest = async () => {
     create = {
        "name"  :  document.getElementById('name').value,
        "building"  :  document.getElementById('building').value,
        "coordinate"  :  document.getElementById('coordinate').value,
        "street"  : document.getElementById('street').value,
        "zip"  :  document.getElementById('zip').value,
        "borough"  :  document.getElementById('borough').value,
        "cuisine"  :  document.getElementById('cuisine').value,
        "grade"  :  document.getElementById('grade').value,
      }
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(create)
    }

  console.log("form object is " + JSON.stringify(create));
  const response = await fetch('https://us-central1-cs602-hw5.cloudfunctions.net/create', config);
  jsonResult = await response.json();
  console.log("create response is " + JSON.stringify(jsonResult));
  console.log('made the request to the create API');
}

const deleteRequest = async () => {
console.log("FOOBAR")
   const config = {
       method: 'GET',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
   }

 const response = await fetch('https://us-central1-cs602-hw5.cloudfunctions.net/deleteById?restaurantId=' + deleteInput.value, config);
 jsonResult = await response.json();
 console.log("delete response is " + JSON.stringify(jsonResult));
 console.log('made the request to the delete API');
}

function setForm() {
    form.set("name", document.getElementById('name').value)
    form.set("street", document.getElementById('street').value)
    form.set("zip", document.getElementById('zip').value)
    form.set("borough", document.getElementById('borough').value)
    form.set("cuisine", document.getElementById('cuisine').value)
    form.set("grade", document.getElementById('grade').value)
}

window.addEventListener('DOMContentLoaded', (event) => {
    search.addEventListener('click', event => {
        makeRequest()
        readLayer.innerText = JSON.stringify(jsonResult)
        console.log("fetched read data")
    })
    
    search.addEventListener('click', event => {
        searchPanel.classList.toggle('hidden');
     })
    
     deleted.addEventListener('click', event => {
        deletePanel.classList.toggle('hidden');
     })
    
    add.addEventListener('click', event => {
        addPanel.classList.toggle('hidden');
     })
    
     submit.addEventListener('click', event => {
        console.log("adding data")
        submitRequest()
    })
    
    deleteSubmit.addEventListener('click', event => {
        console.log("deleting data")
        deleteRequest()
    })
});

// addEventListener('load', event => {
//     makeRequest()
//     readLayer.innerText = JSON.stringify(jsonResult)
//     console.log("fetched read data")
// })



document.querySelectorAll('form-control').forEach(item => {
    item.addEventListener('blur', event => {
        setForm();
    })
})

// add.addEventListener('toggle', event => {
//     if (event.target.open) {
//         console.log('open');
//     } else {
//         console.log('closed');
//     }
// });

  
  
  


