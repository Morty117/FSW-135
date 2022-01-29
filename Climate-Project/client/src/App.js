import Auth from './components/Auth';
import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import './css/App.css';
import Profile from './components/Profile';
import Issues from './components/Issues';
import { UserContext } from './context/UserProvider';

function App() {
  const { token } = useContext(UserContext)

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={token ? <Navigate to='/profile' /> : <Auth />}>
          </Route>

          <Route path="/issues" element={token ? <Issues /> : <Navigate to='/' />}>
          </Route>

          <Route path="/profile" element={token ? <Profile /> : <Navigate to='/' />}>
          </Route>

        </Routes>
    </div>
  );
}

export default App;
