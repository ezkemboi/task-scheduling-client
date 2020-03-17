import React from 'react';
import axios from 'axios';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/tasks/assigned").then(res => {
      const { tasks } = res.data;
      this.setState({
        tasks
      })
    }).catch(err => {
      alert(`An error occurred ${err}`)
    })
  }

  render() {
    const { tasks } = this.state;

    let tasksItems;

    tasksItems = tasks.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.customerFirstName} {item.customerLastName}</td>
          <td>{item.personnelFirstName} {item.personnelLastName}</td>
          <td>{item.customePhoneNo}</td>
          <td>{item.agentId}</td>
          <td>{item.status}</td>
          <td>{item.location}</td>
          <td>{item.gender}</td>
          <td>{item.age}</td>
          <td>{item.comments}</td>
          <td>{item.registration}</td>
        </tr>
      )
    })

    return (
      <div className="Tasks">
        <div className="Tasks__items">
          <table border="1">
            <thead>
              <tr>
                <th>Task Id</th>
                <th>Customer Name</th>
                <th>Personal Name</th>
                <th>Customer Phone Number</th>
                <th>Agent Id</th>
                <th>Task Status</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Comments</th>
                <th>Registration</th>
              </tr>
            </thead>
            <tbody>
              {tasksItems}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default Tasks;
