import logo from './logo.svg';
import './App.css';
import MessageBoard from './MessageBoard';
import { AddMessage } from './AddMessage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
    <Route path='/' element={<MessageBoard/>} />

    <Route path='/addMessage' element={<AddMessage/>}  />



      </Routes>



    </div>
  );
}

export default App;
