import { useSelector } from "react-redux"
import { modeChange } from '../../redux/postSlice';
import { useEffect, useState } from "react"
import { findAllPost } from "../../services/postService"
import ContentForm from "../../components/ContentForm/ContentForm";

const Post = ()=>{
    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState([])
    const postMode = useSelector((state) => state.post.value)
    const userRole = useSelector((state) => state.user.value.role)
    
    useEffect(()=>{
        setLoading(true)
        const fetchData = async ()=>{
            await findAllPost()
                .then(response => setData(response.data))
                .catch(err => console.log(err))
            setLoading(false)    
        }
        fetchData()
    },[])
    return(
        <div className="Page">
            <ContentForm 
                ContentTitle = { "POST" } 
                data = { data } 
                userRole = { userRole } 
                modeChange = { modeChange } 
                postMode = { postMode }
            />
        </div>
    )
}
export default Post