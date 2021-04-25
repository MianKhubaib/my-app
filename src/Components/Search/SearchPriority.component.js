import React from 'react';

const SearchPriority = ({searchtask,searchChange}) =>
{
    return (
    <div className='bg-light-green dib f3 ma2 shadow-5'>
      <label for="tasks">Choose Priority</label>
        <select name="tasks" id="tasks" onChange={searchChange}>
        <option value=''>No Filter</option>
        <option value='1'>High</option>
        <option value='2'>Medium</option>
        <option value='3'>low</option>
        <option value='4'>Very low</option>
        </select>
    </div>
    );
}

export default SearchPriority;