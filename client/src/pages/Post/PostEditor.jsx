import { useEffect } from "react"
import { getAuth } from "../../services/authService"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostEditor = ()=>{
    useEffect(()=>{
        getAuth()
            .then()
            .catch(err => {
                if(err.response){
                    toast.error(<h3>{ err.response.data.message }<br/>로그인을 다시해달라냥!<br/>🐱</h3>, {
                        position: "top-center",
                        autoClose: 2000
                    })
                } else {
                    toast.error(<h3>서버에 문제가 생긴 것 같다냥<br/>잠시 기다려달라냥!<br/>🐱</h3>, {
                        position: "top-center",
                        autoClose: 2000
                    })
                }
            })
    },[])
    return(
        <div>
            <ToastContainer/>
            PostEditor
        </div>
    )
}
export default PostEditor