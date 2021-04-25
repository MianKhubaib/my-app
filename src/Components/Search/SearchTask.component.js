import React from 'react';

const SearchTask = ({searchfield,searchChange}) =>
{
    return (
    <div className='bg-light-green dib f3 ma2 grow shadow-5'>
       <input 
            className=''
           type='search'
           placeholder='Search Message of Task'
           onChange={searchChange}
           />
    </div>
    );
}

export default SearchTask;