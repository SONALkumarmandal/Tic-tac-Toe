import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToDo } from '../RDK/AddToDo'

function Tasks() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.toDoAdd.todos);

  const handleClick = (btnId) => {
    dispatch(deleteToDo(btnId));
  };

  return (
    <div className="w-full md:w-1/3 lg:w-1/3 h-2/3 bg-zinc-800 rounded-md p-6 flex flex-col overflow-y-auto">
      {
        Object.keys(todos).length === 0 ? (
          <div className="flex-grow flex justify-center items-center text-2xl font-bold text-white">
            No to-dos 🥲
          </div>
        ) : (
          <>
            <div className="text-center text-white text-2xl font-bold mb-4">Tasks</div>
            <ul className="flex flex-col gap-3 overflow-y-auto max-h-full pr-2">
              {
                Object.values(todos).map((todo) => (
                  <li
                    key={todo.id}
                    className="bg-blue-500 text-white rounded-md p-3 flex justify-between items-center"
                  >
                    <span className="break-words max-w-[70%]">{todo.text}</span>
                    <button
                      onClick={() => handleClick(todo.id)}
                      className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </li>
                ))
              }
            </ul>
          </>
        )
      }
    </div>
  );
}

export default Tasks;
