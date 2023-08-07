import { useEffect } from "react"
import { getAuth } from "../../services/authService"

const PostEditor = ()=>{
    useEffect(()=>{
        getAuth()
            .then(response => console.log(response))
            .catch(err => alert(err.response.data.message))
    },[])
    return(
        <div>
            PostEditor
        </div>
    )
}
export default PostEditor