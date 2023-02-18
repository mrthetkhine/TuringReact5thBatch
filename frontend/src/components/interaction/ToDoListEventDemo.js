import { useState } from 'react';
function ToDo({item,deleteItem,updateItem})
{
    let onDeleteHandler = (eventItem)=>{
        console.log('OnDelete ',eventItem);
        deleteItem(eventItem);
    };
    let updateHandler =(eventItem)=> {
      console.log('UpdateItem ',eventItem);
        updateItem(eventItem);
    };
    return <div>
        {item.title}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={(event)=>updateHandler(item)}>Update</button>
        <button type={"button"}
            className={"btn btn-primary"}
                onClick={(event)=>onDeleteHandler(item)}>Delete</button>
    </div>
}
function InputContainer({addNewItem})
{
    let [title,setTitle] = useState('');
    //console.log('Add New Item ',addNewItem);
    let onClickHandler = ()=>{
        //console.log('OnClick ',addNewItem );
        addNewItem(title);
    };
    console.log('InputContainer render');

    return <div>
        <input type="text" value={title}
            onChange={(event)=>setTitle(event.target.value)}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onClickHandler}>
            Add
        </button>
    </div>
}
function ToDoList({items,deleteItem,updateItem})
{
    console.log('ToDoList render');
    return <div>
        {items.map(item=><ToDo key={item.id}
                               item={item}
                               deleteItem={deleteItem}
                               updateItem={updateItem} />)}
    </div>
}
export default function ToDoListEventDemo()
{
    let initialItem = [
        {
            id:1,
            title : 'Task 1',
        },
        {
            id:2,
            title : 'Task 2',
        },
    ]
    const [items,setItems] = useState(initialItem);
    const addNewItem = (title)=>{
        let item = {
            id : items.length+1 ,
            title:  title
        };

        setItems([...items, item]);
        console.log('Add new item invoked');
    };
    const deleteItem = (item)=>{
      console.log('Delete item ',item);
      setItems(items.filter(it=>it.id != item.id));
    };
    const updateItem =(item)=>{
        console.log('Update item ',item);
        let newItems = items.map(it=>it.id== item.id?{
            ...it,
            title:'Change'
        }:it);
        setItems(newItems);
    };

    console.log('ToDoListEventDemo render');
    return (<div>
        <InputContainer addNewItem={addNewItem}/>
        <ToDoList items={items}
                  deleteItem={deleteItem}
                  updateItem={updateItem}/>
    </div>)
}