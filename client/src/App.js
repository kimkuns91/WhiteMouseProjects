import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import ProjectsLayout from './pages/Layout/ProjectsLayout';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Post from './pages/Post/Post';
import PostEditor from './pages/Post/PostEditor';
import Projects from './pages/Projects/Projects';
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='post' element={<Post />} />
          <Route path='projects' element={<Projects />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/project' element={<ProjectsLayout />}>
          <Route path='editor' element={<PostEditor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
