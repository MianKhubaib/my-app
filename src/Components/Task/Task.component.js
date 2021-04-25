import React from 'react';

const Task  =({id,message, assigned_to,assigned_name,priority})=> { 
    return (          
           <div class="flex bg-light-blue f3 ma4 grow shadow-5 ">
            <div class="outline w-25 pa3 mr2 ">
                <code>{id}</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>{message}</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>{assigned_to}</code>
            </div>
            <div class="outline w-25 pa3 mr2">
              <code>{assigned_name}</code>
            </div>
            <div class="outline w-25 pa3">
              <code>{priority}</code>
            </div>
        </div>
 

    );
  }


export default Task;
