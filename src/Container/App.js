import "../Container/App.css";
import Userlist from "../Components/User/Userlist.component";
import { Component } from "react";
import "tachyons";
import { Route, Switch, Link } from "react-router-dom";
import Home from "../Components/Home.component";
import Particles from "react-particles-js";
import "./App.css";
import Tasklist from "../Components/Task/Tasklist.component";
import CreateTask from "../Components/Task/CreateTask.component";
import UpdateTask from "../Components/Task/UpdateTask.component";
import DeleteTask from "../Components/Task/DeleteTask.component";
import About from "../Components/About.component";
import SearchBox from "../Components/Search/SearchBox.component";
//import SearchTask from "./Components/SearchTask.component";
import SearchPriority from "../Components/Search/SearchPriority.component";

const Particlesoptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA933",
        blur: 5,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchfield: "",
      tasks: [],
      //searchtask: "",
      searchpriority: "",
    };
  }

  onPriorityChange = (event) => {
    this.setState({ searchpriority: event.target.value });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onTaskChange = (event) => {
    this.setState({ searchtask: event.target.value });
  };

  newChange = () => {
    this.componentDidUpdate();
  };

  componentDidUpdate() {}

  async componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("AuthToken", "G7aquo5n1h2EX9hZQkM83oL0tgULbn1x");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      //redirect: 'follow'
    };

    const response = await fetch(
      "https://devza.com/tests/tasks/listusers",
      requestOptions
    );
    const data = await response.json();
    console.log(data.users);
    this.setState({ users: data.users, loading: false });

    const response1 = await fetch(
      "https://devza.com/tests/tasks/list",
      requestOptions
    );
    const data1 = await response1.json();
    console.log(data1.tasks);
    this.setState({ tasks: data1.tasks, loading: false });
  }

  render() {
    const { users } = this.state;
    const { tasks, searchfield,  searchpriority } = this.state;

    const filteredusers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    const filteredtasks = tasks.filter((task) => {
      return (
        task.priority.includes(searchpriority) 
        //|| task.message.toLowerCase().includes(searchtask.toLowerCase())
      );
    });

    //<SearchTask searchChange={this.onTaskChange} />

    

    return (
      <main>
        <Particles className="particles" params={Particlesoptions} />
        <div className="tc">
          <p className="f2 bg-green tc ma2 shadow-2">
            Welcome to User Task Managment System
          </p>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>

          <Route path="/CreateTask" exact>
            <CreateTask tasks={tasks} />
          </Route>

          <Route path="/UpdateTask" exact>
            <UpdateTask tasks={tasks} />
          </Route>

          <Route path="/DeleteTask" exact>
            <DeleteTask tasks={tasks} />
          </Route>

          <Route path="/Users" exact>
            <div className="tc flex-box flex-wrap">
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Home"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Task"
              >
                {" "}
                Task link{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/About"
              >
                {" "}
                About Link{" "}
              </Link>
              <br></br>
              <SearchBox searchChange={this.onSearchChange} />
              <Userlist users={filteredusers} tasks={tasks} />
            </div>
          </Route>

          <Route path="/About" exact>
            <div className="tc flex-box flex-wrap">
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Home"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Task"
              >
                {" "}
                Task link{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Users"
              >
                {" "}
                Users link{" "}
              </Link>

              <About />
            </div>
          </Route>

          <Route path="/Task" exact>
            <div className="tc">
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Home"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/Users"
              >
                {" "}
                User link{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/CreateTask"
              >
                {" "}
                Create Task{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/UpdateTask"
              >
                {" "}
                Update Task{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/DeleteTask"
              >
                {" "}
                Delete Task{" "}
              </Link>
              <Link
                className="f3 bg-light-yellow dib tc ma2 grow shadow-2"
                to="/About"
              >
                {" "}
                About Link{" "}
              </Link>

              <br></br>
              <p className="f4 dib bg-red tc ma2 shadow-2">
                Refresh This page if you performed any CUD function as API is
                being used
              </p>
              <br></br>
           
              <SearchPriority searchChange={this.onPriorityChange} />

              <div class="flex bg-light-blue f3 ma4">
                <div class="outline w-25 pa3 mr2">
                  <code>Task ID</code>
                </div>
                <div class="outline w-25 pa3 mr2">
                  <code>Task Message</code>
                </div>
                <div class="outline w-25 pa3 mr2">
                  <code>Assigned_to</code>
                </div>
                <div class="outline w-25 pa3 mr2">
                  <code>Assined_Name</code>
                </div>
                <div class="outline w-25 pa3">
                  <code>Priority</code>
                </div>
              </div>
            </div>

            <Tasklist tasks={filteredtasks} />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
