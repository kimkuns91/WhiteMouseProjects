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
import { useDispatch, useSelector } from 'react-redux';
import { createContext, useEffect, useState } from 'react';
import { getAuth, getUser } from './services/authService';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from './redux/user';

export const AppContext = createContext();

function App() {
  const [ userInfo, setUserInfo ] = useState({})
  const autoLogin = useSelector((state) => state.user.value.autoLogin)
  const dispatch = useDispatch()

  useEffect(()=>{
    const User = JSON.parse(sessionStorage.getItem('User'));
    if(!User){
      if(autoLogin){
        return getUser()
          .then(response => setUserInfo({
            email : response.email,
            username : response.username,
          }))
          .catch(()=>{
              toast.error(<h3>유저 정보를 불러오지 못했다냥!<br/>로그인을 다시해달라냥!<br/>🐱</h3>, {
                position: "top-center",
                autoClose: 2000
              })
              localStorage.removeItem('Token')
          })
      }
      return dispatch(logout())
    }
    setUserInfo(User)
  },[])

  return (
    <div className="App">
      <AppContext.Provider value={ userInfo }>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Layout userInfo={ userInfo }/>}>
            <Route path='' element={<Main />} />
            <Route path='about' element={<About />} />
            <Route path='post' element={<Post />} />
            <Route path='projects' element={<Projects />} />
            <Route path='login' element={<Login setUserInfo={ setUserInfo }/>} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='/project' element={<ProjectsLayout />}>
            <Route path='editor' element={<PostEditor />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
