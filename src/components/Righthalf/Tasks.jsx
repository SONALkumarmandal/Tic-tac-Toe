import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteToDo } from '../RDK/AddToDo'
function Tasks() {
  const dispatch = useDispatch()
  function handleClick(btnId){
    dispatch(deleteToDo(btnId))
  }
    const val=useSelector((state)=>state.toDoAdd.todos)
  return (
    <div className='w-full flex flex-col md:w-1/3 lg:w-1/3 bg-zinc-800 rounded-md p-6 items-start'>
        {(Object.keys(val).length===0)? <div className='w-full h-full flex justify-center items-center text-3xl font-bold p-2'>no to dos 🥲</div> : <div className='w-full'>
        <div className='w-full  flex justify-center items-center font-bold text-2xl mb-3'>tasks</div>
        <div className='w-full flex justify-center items-center'>
            <ul className='w-4/6 flex flex-col gap-2 text-center text-xl font-mono rounded-md text-wrap'>
                {
                    Object.values(val).map((itm)=>{
                    return(<div className='w-full flex gap-1'>
                      <li className='w-full h-35px bg-blue-500 rounded-md break-words overflow-hidden text-ellipsis p-3' key={itm.id}>{itm.text}</li>
                      <button onClick={()=>{handleClick(itm.id)}} className='bg-red-500 text-white rounded-md ' type="button">Delete Todo</button>
                    </div>) }
                )}
            </ul>
        </div>
         </div>}
         
    </div>
  )
}

export default Tasks