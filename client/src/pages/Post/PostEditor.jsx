import { useEffect } from "react"
import { getAuth } from "../../services/authService"

const PostEditor = ()=>{
    useEffect(()=>{
        getAuth()
            .then(response => console.log(response))
    },[])
    return(
        <div>
            PostEditor
        </div>
    )
}
export default PostEditor