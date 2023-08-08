import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signin } from '../../services/authService';
import { useDispatch } from "react-redux"
import { login } from '../../redux/userSlice';

const Login = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const submit = async (values) => {
        const { email, password, autoLogin } = values;
        signin({ email, password, autoLogin })
            .then(response => {
                dispatch(login({ 
                    isLogined : true,
                    autoLogin, 
                    email: response.email,
                    username: response.username
                }))
                toast.success(<h3>{ response.username } 친구! 반갑다 찍!<br/>🐭</h3>, {
                    position: "top-center",
                    autoClose: 2000
                });
                setTimeout(()=> {
                    navigate("/");
                }, 1000);
            })
            .catch( err => 
                toast.error(err.response.data.message + "🐱", {
                    position: "top-center",
                })
            )
    };
    
    return(
        <Formik
        initialValues={{
            email: "",
            password: "",
            autoLogin : false
        }}
            onSubmit={submit}
            validateOnMount={true}
        >
            {({values, handleSubmit, handleChange, errors}) => (
                <div>
                    <ToastContainer/>
                    <form onSubmit={ handleSubmit } autoComplete="off">
                        <div>
                            <label htmlFor="">이메일</label>
                            <input 
                                type="text" 
                                name="email"
                                value={ values.email }
                                onChange={ handleChange } 
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호</label>
                            <input 
                                type="password" 
                                name="password"
                                value={ values.password }
                                onChange={ handleChange } 
                            />
                        </div>
                        <div>
                            <label htmlFor="">자동 로그인</label>
                            <input 
                                type="checkbox" 
                                name="autoLogin"
                                value={ values.autoLogin }
                                onChange={ handleChange } 
                            />
                        </div>
                        <button type="submit">로그인</button>
                    </form>
                </div>
            )}
        </Formik>
    )
}
export default Login