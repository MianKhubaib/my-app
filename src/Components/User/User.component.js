import React from 'react';

const User = ({name,id,picture}) => {
   return(
          <div className='flex-box br2 flex-wrap tc dib ma1 grow shadow' >
                <div className='inline pa5'>
                <img alt='user' src={picture} width="150" height="170"/>
                <h1 className="bg-green">ID: {id}</h1>
                <h1 className="bg-near-white"> {name} </h1>
              </div>
          </div>

    
   );
}

export default User;