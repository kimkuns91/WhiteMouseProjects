import { Link } from 'react-router-dom'
import './Header.css'

const Header = ()=>{
    return(
        <div className='Header'>
            <div className='Wrap'>
                <Link to='about'>About</Link>
                <Link to='Post'>Post</Link>
                <Link to='Projects'>Projects</Link>
                <Link to='login'>Login</Link>
                <Link to='register'>SignUp</Link>
            </div>
        </div>
    )
}
export default Header