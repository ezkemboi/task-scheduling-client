import React from 'react';

function Tasks() {

  return (
    <div className="Tasks">
      <div className="Tasks__items">
        <table border="1">
          <tr>
            <th>Task Id</th>
            <th>Customer First Name</th>
            <th>Personal First Name</th>
            <th>Personal Other Name</th>
            <th>Customer Last Name</th>
            <th>Customer Phone Number</th>
          </tr>
          <tr>
            <td>20190</td>
            <td>John</td>
            <td>Legend</td>
            <td>Philip</td>
            <td>Paul</td>
            <td>0789345687</td>
            <td className="more-details">All Details</td>
          </tr>
          <tr>
            <td>14672</td>
            <td>King</td>
            <td>John</td>
            <td>Paul</td>
            <td>James</td>
            <td>07988245687</td>
            <td className="more-details">All Details</td>
          </tr>
          <tr>
            <td>20190</td>
            <td>John</td>
            <td>Legend</td>
            <td>Philip</td>
            <td>Paul</td>
            <td>0789345687</td>
            <td className="more-details">All Details</td>
          </tr>
          <tr>
            <td>14672</td>
            <td>King</td>
            <td>John</td>
            <td>Paul</td>
            <td>James</td>
            <td>07988245687</td>
            <td className="more-details">All Details</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Tasks;
