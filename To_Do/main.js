let items = ["uhifg"];

const itemsDiv = document.getElementById("items"); // getting div 
const input = document.getElementById("itemInput"); // getting input

const storageKey = "items"; // key used for storing from local storage

function render() {
  itemsDiv.innerHTML = null; // first div will be null

  for (const [idx, item] of Object.entries(items)) { //
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.margin = "20px";
    // container.style.background = "pink";


    const text = document.createElement("h3");
    text.textContent = item;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.style.marginLeft = "30px";
    button.style.border = "none";
    button.style.borderRadius = "30px";
    button.style.width = "10%";
    button.style.background = "#8043";
    button.onclick = () => removerItem(idx);

    container.append(text); // text is keeping in container
    container.append(button); // button is placing in container

    itemsDiv.append(container); // container is placed in div
  }
}

function loadItmes() {
  const oldItems = localStorage.getItem(storageKey); // getting stroed data as a string from local storage
  if (oldItems) items = JSON.parse(oldItems); // if any data , parse it from string to array

  render(); //calling the fucniton 
}

function saveItems() {
  const stringItems = JSON.stringify(items); //convert the items array to a json string
  localStorage.setItem(storageKey, stringItems); // store the json string in local storeage under the key storage
}

function addItem() {
  const value = input.value;// storing values of input in value variable
  if (!value) {
    alert("You cannot add an empty Item "); // giving alert if value is not there
    return;
  }
  items.push(value); // if value exist pushing to items

  render(); //recalling
  input.value = ""; // making empty input 

  saveItems(); // saving items
}

function removerItem(idx) {
  items.splice(idx, 1); // removing item 
  render();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItmes);
