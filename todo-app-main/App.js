var theme = document.getElementById("theme-color");
var icon = document.querySelector(".icons");
var writeHere = document.getElementById('write-here')
var todoListItems = document.querySelector(".lists-display ul")
var itemsLeftCount = document.querySelector(".status-left span")

itemsLeftCount.innerText = document.querySelectorAll('ul li').length;
console.log(itemsLeftCount.innerText)


theme.addEventListener('click', () => {
  document.querySelector("body").classList = [theme.checked ? 'theme-dark' : 'theme-light'];
  icon.setAttribute = [theme.checked ? icon.src="images/icon-sun.svg" : icon.src="images/icon-moon.svg" ];
});

writeHere.addEventListener("keypress",(e)=>{
  if(e.key === "Enter" && writeHere.value != ""){
    insertNewItem(writeHere.value);
    writeHere.value="";
    
  }
});

function insertNewItem(text){
  console.log("adding")
  var newItem = document.createElement("li");

  newItem.innerHTML = `
  <label class="container">
      <input type="checkbox">
      <span class="text">${text}</span>
      <span class="checkmark"></span>
  </label>
  <span class="remove"></span>
  `;
  console.log("added")
  todoListItems.append(newItem);
  itemsLeftCount.innerText++;
  
 }

function removeTodoItem(remove_item) {
  console.log(remove_item)
  remove_item.remove();
  itemsLeftCount.innerText--;
}

todoListItems.addEventListener('click',(e) => {
  if (e.target.classList.contains('remove')) {
    console.log(e.target.classList.contains('remove'))
      removeTodoItem(e.target.parentElement);
  }
});

// document.querySelector(".lists-display input[type='checkbox']").addEventListener("click",()=>{
//   document.querySelector(".lists-display input[type='checkbox']").classList.add("yes-checked")
// }) 
var checkbox = document.querySelector(".lists-display input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});