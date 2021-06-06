import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Personal Details</h1>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">First Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <label for="exampleInputEmail1" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Field 3</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <label for="exampleInputEmail1" className="form-label">Field 4</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <h1>Account Details</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Field 5</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <label for="exampleInputEmail1" className="form-label">Field 6</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        <h1>Storage Medium</h1>

        <select class="form-select" aria-label="Default select example">
          <option value="1">Database</option>
          <option value="2">Local Storage</option>
        </select>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default App;
