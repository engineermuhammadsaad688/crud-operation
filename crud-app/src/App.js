import './App.css';
import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';

function App() {
  return (
    <div className="container">
      <div className="d-flex">
        <h1>CRUD APP</h1>
      </div>

      <div className="toolbar">
      <button className='btn btn-p'><PlusCircle size={16}></PlusCircle><span>Add</span></button>
      </div>
      <hr/>
      <table className='table'>
        <thead>
          <tr>
            
          </tr>
           </thead>
        <tbody></tbody>
      </table>
      </div>
  );
}

export default App;
