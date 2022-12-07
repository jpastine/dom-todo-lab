const inpEl = document.getElementById('inp')
const btnEl = document.getElementById('submit-button')
const ulId = document.getElementById("todo-list")

btnEl.addEventListener('click', function (evt){
  const li = document.createElement('li')
  console.dir(li)
  li.textContent = inpEl.value
  document.getElementById('todo-list').appendChild(li)
  inpEl.value = ''
  //if (inpEl.value.length == 0){
    //alert('You know you have things to-do')
})


function validate() {
  if (inpEl.value == ""){
    return false;
  } else {
  }
}
    
  

    
