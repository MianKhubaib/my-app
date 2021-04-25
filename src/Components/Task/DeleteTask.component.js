import React, { useState } from 'react';
import { Link } from 'react-router-dom'



const DeleteTask = ({  tasks }) => {


  const [NewID, setID] = useState("");



  const handleSubmit = (event) => {
    var myHeaders = new Headers();
    myHeaders.append("AuthToken", "G7aquo5n1h2EX9hZQkM83oL0tgULbn1x");

    var formdata = new FormData();
    formdata.append("taskid", JSON.parse(JSON.stringify(NewID)));

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://devza.com/tests/tasks/delete", requestOptions)
      .then(response => response.text())
      .then(result => alert(result+' \n Please refresh Task Page as API is being used'))
      .catch(error => alert('error', error));

    event.preventDefault();
  }

//const obj={'message': newmessage,'due_date':newDate,'assigned':newassigned,'priority':Newpriority, 'taskid':NewID}


  

  // tasks.append({'message': "Hiiiiii"});


  return (

    <div className="tc">
      <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/Home"> Home </Link>
      <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/Users"> User link </Link>
      <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/Task">  Task List </Link>
      <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/CreateTask"> Create Task </Link>
      <Link className='f3 bg-light-yellow dib tc ma2 grow shadow-2' to="/UpdateTask"> Update Task </Link>

      <form onSubmit={handleSubmit}>
        <div className="center shadow-5 pa4 br3">
        

          <label className="ba grow bg-green pa1 ma3  dib bold f3 shadow ">
            ID:
                    <input className="posit" type="number" value={NewID} id="ID" onChange={(e) => setID(e.target.value)} />
          </label>


        </div>
        <input className="f3 bg-near-white border grow shadow-5" type="submit" value="Submit" />
      </form>

    </div>
  );
}


export default DeleteTask;