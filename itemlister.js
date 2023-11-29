var form=document.getElementById('addForm');
var items=document.getElementById('items');
form.addEventListener('submit',addItem);
function addItem(e)
{  e.preventDefault();
    
  var newItem=document.querySelector('#item');
  
  var li=document.createElement('li');
  li.className="list-group-item";
  li.textContent=item.value;
 items.appendChild(li);
 var deleteBtn=document.createElement('button');
 deleteBtn.className="btn btn-danger btn-sm float-right delete";
 deleteBtn.appendChild( document.createTextNode('X'))
li.appendChild(deleteBtn);

var editBtn=document.createElement('button');
   editBtn.className='edit';
   editBtn.appendChild(document.createTextNode('E'));
   li.appendChild(editBtn);
}
items.addEventListener('click',removeItem);
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
      if(confirm('Are you sure?'))
      {
        var li=e.target.parentElement;
        items.removeChild(li)
      }
    }
}