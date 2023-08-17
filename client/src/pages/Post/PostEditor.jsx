import { useEffect, useState } from "react"
import { getAuth } from "../../services/authService"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextEditor from "../../components/TextEditor/TextEditor";
import { useNavigate } from "react-router-dom";
import { createPost } from '../../services/postService';

const PostEditor = ()=>{
    const navigate = useNavigate()

    const [ category, setCategory ] = useState('')
    const [ keyword, setKeyword ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ desc, setDesc ] = useState('')

    useEffect(()=>{
        getAuth()
            .then()
            .catch(err => {
                if(err.response){
                    toast.error(<h3>{ err.response.data.message }<br/>로그인을 다시해달라냥!<br/>🐱</h3>, {
                        position: "top-center",
                        autoClose: 2000
                    })
                    setTimeout(()=> {
                        navigate("/login");
                    }, 2000);
                } else {
                    toast.error(<h3>서버에 문제가 생긴 것 같다냥<br/>잠시 기다려달라냥!<br/>🐱</h3>, {
                        position: "top-center",
                        autoClose: 2000
                    })
                }
            })
    },[])
    const writeEndBtn = ()=>{
        createPost({
            category,
            keyword,
            title,
            desc,
        }).then(response => {
                toast.success(<h3>글 작성이 완료되었다 찍!<br/>🐭</h3>, {
                    position: "top-center",
                    autoClose: 2000
                })
                navigate('/post')
            }
        ).catch(err => {
            if(err.response){
                toast.error(<h3>{ err.response.data.message }<br/>로그인을 다시해달라냥!<br/>🐱</h3>, {
                    position: "top-center",
                    autoClose: 2000
                })
                setTimeout(()=> {
                    navigate("/login");
                }, 2000);
            } else {
                toast.error(<h3>서버에 문제가 생긴 것 같다냥<br/>잠시 기다려달라냥!<br/>🐱</h3>, {
                    position: "top-center",
                    autoClose: 2000
                })
            }
        })
    }
    return(
        <div>
            <ToastContainer/>
            <TextEditor 
                setCategory={ setCategory }
                setKeyword={ setKeyword }
                setTitle={ setTitle }
                desc={ desc }
                setDesc={ setDesc }
                writeEndBtn={ writeEndBtn }
            />
        </div>
    )
}
export default PostEditor