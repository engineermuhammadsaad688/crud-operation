import './App.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div className="container">
      <div className="d-flex">
        <h1>CRUD APP</h1>
      </div>

      <div className="toolbar">
        <button className='btn' onClick={onOpenModal}><PlusCircle size={16}></PlusCircle><span>Add</span></button>
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
              <button className='btn ml2' ><Edit size={16}></Edit><span>Edit</span></button>
              <button className='btn ml2'><Trash2 size={16}></Trash2><span>Delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='form'>
        <h2>Add User</h2>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="name">Email</label>
        <input type="text" />
        <label htmlFor="name">Role</label>
        <input type="text" />
        <label htmlFor="name">Address</label>
        <textarea name="address" id="" cols="30" rows="10"></textarea>
        <button className="btn">Submit</button>
        </div>      
        </Modal>
    </div>
  );
}

export default App;
