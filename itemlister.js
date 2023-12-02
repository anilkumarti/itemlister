var form=document.getElementById('addForm');
var items=document.getElementById('items');
var newItem=document.querySelector('#item');
var form2=document.querySelector('#item2');

form.addEventListener('submit',addItem);
function addItem(e)
{  e.preventDefault();
     
  var li=document.createElement('li');
  li.className="list-group-item";
  li.textContent=item.value;
 items.appendChild(li);
 var deleteBtn=document.createElement('button');
 deleteBtn.className="btn btn-danger btn-sm float-right delete";
 deleteBtn.appendChild( document.createTextNode('X'))
li.appendChild(deleteBtn);


   var details=document.createElement('div')
    details.className='textDescription';
    details.textContent=form2.value;
   li.appendChild(details)

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
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
var text=" ";
function filterItems(e)
{ 
 text=e.target.value.toLowerCase();

var i=items.querySelectorAll('li')
Array.from(i).forEach(function(itemf){
  var itemName=itemf.firstChild.textContent;
  var itemName2Element = itemf.children[1];
  var itemName2 = itemName2Element ? itemName2Element.textContent : '';
 
  if(itemName.toLowerCase().indexOf(text)!=-1 ||itemName2.toLowerCase().indexOf(text)!=-1 )
  {
    itemf.style.display='block';
  } else 
  {
    itemf.style.display='none';
  }

});


}