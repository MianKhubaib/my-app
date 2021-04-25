import React from 'react';
import User from './User.component'

const Userlist = ({users,tasks}) =>{

    return(
        <div>
            { users.map((user,i) =>{
              return < User key={i}
                       id={users[i].id}
                       name={users[i].name}
                       picture={users[i].picture
                      
                    }
              />

            })}

        </div>
        );
}

export default Userlist;
