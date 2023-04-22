import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Instructor from './components/instructor/Instructor';
import Header from './components/layout/header/Header';
import Titlebar from './components/layout/titleBar/Titlebar';
import Sidebar from './components/layout/sidebar/Sidebar';
import Home from './components/home/Home';
import Topic from './components/module/topic/Topic';
import Quiz from './components/module/quiz/Quiz';
import Assignment from './components/module/assignment/Assignment';
import Dropdown from './components/layout/dropdown/Dropdown';

function App() {
  return (
    <Router>
      <div className="main-container">
      <Titlebar/>
      <Header/>
      <div className='content-container'>
        <Sidebar/>
        <div className='main-content'>
        <Routes>
          <Route path="/instructor" element={<Instructor/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/module/topic" element={<Topic/>}/>
          <Route path="/module/quiz" element={<Quiz/>}/>
          <Route path="/module/assignment" element={<Assignment/>}/>
          <Route path="/dropdown" element={<Dropdown/>}/>
        </Routes>
        </div>
       </div>
      </div>
    </Router>
  );
}

export default App;
