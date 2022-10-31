import './App.css';
import React  from 'react';
import NavSideBar from './components/NavSidebar'
import HomeNavBar from './components/HomeNavBar'
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import {Routes,Route,HashRouter  as Router, useRoutes, useLocation} from 'react-router-dom'
import Profile from './pages/Profile'
import Nutrition from './pages/Nutrition'
import Fitness from './pages/Fitness'

// import Navbar from "./components/navbar";
import RecordList from './components/recordList';
import Edit from './components/edit';
import Create from './components/create';

// function App() {
//   return (
//     <div className="App"  style={{
//       backgroundColor: '#F1EFEF'}}>
//       <Router>
//         <NavSideBar />
//         <Routes>
//           <Route exact path="/" element={<Profile />} />
//           <Route path="/nutrition" element={<Nutrition />} />
//           <Route path="/fitness" element={<Fitness />} />
//           <Route path="/recordList" element={<RecordList />} />
//           <Route path="/edit/:id" element={<Edit />} />
//           <Route path="/create" element={<Create />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

function Wrapper(){
  const location = useLocation();
  return (<>
      {["/","/login","/signup"].includes(location.pathname)?<HomeNavBar/>:<NavSideBar />}
  <Routes>
    <Route  path="/profile" element={<Profile />} />
    <Route path="/nutrition" element={<Nutrition />} />
    <Route path="/fitness" element={<Fitness />} />
    <Route  path="/" element={<HomePage />} />
    <Route path="/login" element={<LogInPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
  </>)

}

function App() {
  return (
    <div className="App"  >
      <Router>
        <Routes>
          <Route path="*" element={<Wrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
