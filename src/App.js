import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Start from './components/Start/Start';

const App = () => {
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const takeUserName = async (userName) => {
    setLoading(true);
    try {
      const resUser = await axios.get(`https://api.github.com/users/${userName}`);
      const resRepo = await axios.get(`https://api.github.com/users/${userName}/repos`);
      setUser(resUser.data);
      setRepo(resRepo.data);
      setNotFound(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setNotFound(true);
    }
  };

  return (
    <div className="App">
      <NavBar takeUserName={takeUserName} />
      {loading ? <Loader /> : notFound ? <NotFound /> : <main>{user ? <Main user={user} repo={repo} /> : <Start />}</main>}
    </div>
  );
};

export default App;
