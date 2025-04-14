import React from 'react'
import AddTask from '../Lefthalf/AddTask'
import Tasks from '../Righthalf/Tasks'
function LandingPage() {
  return (
    <div className='bg-blend-darken h-screen w-full flex flex-col md:w-full lg:w-full overflow-y-hidden'>
        <div className='w-full  md:w-full lg:w-full h-24 flex justify-center items-center text-3xl text-white font-extrabold'>To-Do App</div>
        <div className='flex flex-col md:flex-row lg:flex-row mt-12 p-8 gap-8 h-screen '>
        <AddTask />
        <Tasks />
        </div>
        
    </div>
  )

}

export default LandingPage