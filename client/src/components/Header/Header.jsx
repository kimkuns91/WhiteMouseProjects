import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = ()=>{
    const userInfo = useContext(AppContext);
    // console.log(userInfo)
    const isLogined = useSelector((state) => state.user.value.isLogined)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const logoutBtn = ()=>{
        toast.info(<h3>다음에 봐요 찍찍!<br/>🐭</h3>, {
            position: "top-center",
            autoClose: 2000
        });
        setTimeout(()=> {
            localStorage.removeItem('Token'); 
            sessionStorage.removeItem('User'); 
            dispatch(logout())
            navigate("/");
        }, 2000);
    }
    return(
        <div className='Header'>
            <div className='Wrap'>
                <ToastContainer/>
                <Link to='about'>About</Link>
                <Link to='Post'>Post</Link>
                <Link to='Projects'>Projects</Link>
                {
                    !isLogined
                    ? <>
                        <Link to='login'>Login</Link>
                        <Link to='register'>SignUp</Link>
                    </>
                    : 
                    <>
                        <p>{ userInfo.username }</p>
                        <button onClick={ logoutBtn }>Logout</button>
                    </>
                }

            </div>
        </div>
    )
}
export default Header