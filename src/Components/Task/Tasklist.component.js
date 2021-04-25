import React from 'react';
import Task from './Task.component';

const Tasklist = ({tasks}) =>{

    return(
        <div>
            { tasks.map((task,i) =>{
              return < Task key={i}
                       id={tasks[i].id}
                       message={tasks[i].message}
                       assigned_to={tasks[i].assigned_to}
                       assigned_name={tasks[i].assigned_name}
                       priority={tasks[i].priority}
              />
            })
            }

            {console.log(tasks[0])}

        </div>
        );
}

export default Tasklist;
