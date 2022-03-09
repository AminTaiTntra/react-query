import './App.css';
import Users from './Users';
import {useState} from 'react'
import UserDetails from './UserDetails';


function App() {
  const [userId , setUserId] = useState() 

  return (
    <div className="App">
      <h1>React Query!</h1>
      <div style={{ padding : 20 , width : '30%' }}>

      <Users setUserId={setUserId}/>

      </div>
      <div style={{ padding : 20 , width : '70%' }}>

      <UserDetails userId={userId}/>
      
      </div>
    </div>
  );
}

export default App;
