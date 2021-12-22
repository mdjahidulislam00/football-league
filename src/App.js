import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
        <Route path="ClubDetails/:countryName" element={<TeamDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
