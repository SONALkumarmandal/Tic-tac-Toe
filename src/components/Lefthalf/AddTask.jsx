import React from 'react'
import {useDispatch } from 'react-redux'
import { toDoAddition } from '../RDK/AddToDo'
import { useState } from 'react'
function AddTask() {
    const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim() === '') return; 

    const newToDo = {
      id: Date.now().toString(), 
      text: text,
    };

    dispatch(toDoAddition(newToDo));
    setText(''); 
  };
  return (
    <div className='w-full bg-black md:w-1/2 lg:w-1/2 h-1/2 flex flex-col justify-center items-center '>
        <div className='w-full h-full md:w-1/2 lg:w-1/2  rounded-md text-center '>
        <div className='h-1/6 w-full content-center font-bold text-2xl'>
            Add To-Do
        </div>
        <div className='h-5/6 w-full  flex flex-col pt-10 items-center text-center gap-4'>
            <input value={text} onChange={handleChange} className='bg-white w-2/3 h-1/4 border-2 border-black rounded-md font-mono text-black text-center text-wrap' type="text" name="" id="" />
            <button onClick={handleAdd} className='bg-blue-500 rounded-2xl w-2/3 h-1/4 cursor-pointer hover:bg-blue-600' type="submit">Add</button>
        </div>
        </div>
    </div>
  )
}

export default AddTask