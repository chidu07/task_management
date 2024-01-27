import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/Layout';
import Addtask from './component/Addtask';
import Viewtask from './component/Viewtask';
import Subtask from './component/Subtask';
import Profile from './component/Profile';
import Login from './component/Login';
import Sighnin from './component/Sighnin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/layout" element={<Layout />}/>
        <Route path="/addtask" element={<Addtask />}/>
        <Route path="/viewtask" element={<Viewtask />}/>
        <Route path="/subtask" element={<Subtask />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/sighnin" element={<Sighnin />}/>

        
         
          {/* <Route path="/home" element={<Layout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add" element={<Addtask />} />
          <Route path="/update" element={<Update />} /> */}
         
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
