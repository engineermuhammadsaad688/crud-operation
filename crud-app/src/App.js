import './App.css';
import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import { useState } from 'react';

function App() {
  const [editUser, setEditIndex] = useState(null); 
   const [deleteUser, setDeleteUser] = useState(null);


  return (
    <div className="container">
      <div className="d-flex">
        <h1>CRUD APP</h1>
      </div>

      <div className="toolbar">
        <button className='btn btn-p'><PlusCircle size={16}></PlusCircle><span>Add</span></button>
      </div>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Addresss</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kevin</td>
            <td>Kevin@gmail.com</td>
            <td>Manager</td>
            <td>Pakistan Ex,,New Islamabab </td>
            <td>
              <button className='btn ml2' onClick={() => editUser}><Edit size={16}></Edit><span>Edit</span></button>
              <button className='btn ml2' onClick={() => deleteUser}><Trash2 size={16}></Trash2><span>Delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
