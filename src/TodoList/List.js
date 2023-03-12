import React, {useState} from 'react';
import Form from './Form';

function List() {
    const [list, setList] = useState([]);

    const AddTodo = () =>{
      if(list.trim() !== ''){
        setList([...list, {id: Math.floor(Math.random()*10000), text: list}])
      }
    }
  return (
    <div>
        <h1>Hey There!! What's the plan for today</h1>
        <Form AddTodo={AddTodo} list={list}/>
    </div>
  )
}

export default List