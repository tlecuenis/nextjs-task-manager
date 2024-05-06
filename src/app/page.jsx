import TaskCard from '@/components/TaskCard'
import {prisma} from '@/libs/prisma'

async function loadTasks(){
  const tasks = await prisma.task.findMany()
  return tasks
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {

  const tasks = await loadTasks()
  console.log(tasks)
  return(
    <section className='container mx-auto mt-4'>
      <h2 className='text-3xl text-center font-bold'>Tareas</h2>
      <ul className='p-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task}/>
        ))}
        
      </ul>

    </section>
  )
};
