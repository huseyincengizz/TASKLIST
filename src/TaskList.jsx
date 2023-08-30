import TaskShow from './TaskShow';

export default function TaskList({ tasks, deleting, onUpdate }){

    return(
        <div className='taskList'>
            {
                tasks.map((task, index) => {
                    return(
                        <TaskShow task={task} key={index} deleting={deleting} onUpdate={onUpdate}/>
                    )
                })
            }
        </div>
    )
}