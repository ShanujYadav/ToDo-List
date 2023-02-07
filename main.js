// funcanility(1.Add 2.Delete 3.Search)

//Add the item
let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")


form.addEventListener("submit", function (e) {
  e.preventDefault()
  let item = document.getElementById("item").value
  let li = document.createElement("li")
  let btn = document.createElement("button")


  btn.appendChild(document.createTextNode("X"))
  li.appendChild(document.createTextNode(item))
  li.appendChild(btn)

  btn.className = 'btn btn-danger btn-sm float-right delete'
  li.className = "list-group-item"
  itemlist.appendChild(li)
  document.getElementById("item").value = ''
})
// delete 
itemlist.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure, You want to delete !")) {
      // console.log(e.target.parentElement)
      itemlist.removeChild(e.target.parentElement)
    }
  }
}
)

filter.addEventListener("keypress", function (e) {
  let value = e.target.value.toLowerCase()
  let li = document.getElementsByTagName("li")
  Array.from(li).forEach(function (item) {
    if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
      item.style.display="block"
    }
    else
    item.style.display="none"


  })
})