import { Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import { UserPage } from './pages/UserPage/UserPage';
import { RepoPage } from './pages/RepositoryPage/RepoPage';




function App() {

  return (


    <div className="App">

      {/* <UserInfo /> */}

      <Routes>
        <Route path="/" element={<UserPage />}/>
        <Route path="/repository/:repo/:username" element={<RepoPage />}/>
      </Routes>

    </div>
  );
}

export default App;
