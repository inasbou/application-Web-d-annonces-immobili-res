
import React from 'react' ; 
import './App.css';  
import {BrowserRouter as Router, Route ,Routes  }from 'react-router-dom' ;
import Home from './Pages/Home/Home'; 
import Aide from './Pages/aide/aide';
import Apropos from './Pages/apropos/apropos';
import MainPage from './Pages/MainPage';
import Userpage from './Pages/Userpage/Userpage';
import Publier from './Pages/publier/publier'; 
import Details from './Pages/Detailspage/Detailspage' ; 
import Messagerie from './Pages/MessagePage/MessagePage'; 
function App () {
  return (
    <Router> 
      <Routes>
       <Route path="/" element={<Home/> } />
       <Route path="/aide" element={<Aide/>} />
       <Route path="/apropos" element={<Apropos/>} />
       <Route path="/main" element={<MainPage/>} />
       <Route path="/userpage" element={<Userpage/>} />
       <Route path="/publier" element={<Publier/>} />
       <Route path="/details" element={<Details/>} />
       <Route path="/message" element={<Messagerie/>} />

      </Routes>
    </Router> 
    
  ); 
}

export default App ;
