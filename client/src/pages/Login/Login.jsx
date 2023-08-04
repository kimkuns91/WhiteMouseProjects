import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from '../../services/userService';
import { signin } from '../../services/authService';


const Login = ()=>{
    const navigate = useNavigate();
    const submit = async (values) => {
        const { email, password } = values;
        signin({ email, password })
            .then(() => {
                toast.success(<h3>로그인 성공!<br/>🐭</h3>, {
                    position: "top-center",
                    autoClose: 2000
                });
                setTimeout(()=> {
                    navigate("/");
                }, 2000);
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
                        <button type="submit">로그인</button>
                    </form>
                </div>
            )}
        </Formik>
    )
}
export default Login