import { useState } from 'react';
import './App.css';
import { GitHubProfile } from './components/UserInfo';

function App() {

  const [name, setName] = useState('');

  return (


    <div className="App">
     
      <GitHubProfile name={name} />
      
    </div>
  );
}

export default App;
