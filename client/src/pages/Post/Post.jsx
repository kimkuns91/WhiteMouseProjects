import { useSelector } from "react-redux"
import { modeChange } from '../../redux/postSlice';
import { useEffect, useState } from "react"
import { findAllPost } from "../../services/postService"
import CardMode from "../../components/CardMode/CardMode"
import ListMode from "../../components/ListMode/ListMode"
import ChangeMode from "../../components/ChangeMode/ChangMode"
import './Post.css'

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
        <div className="Post Pages">
            <div className="CustomWrap BG02 BD01">
                <ChangeMode modeChange={ modeChange } postMode={ postMode }/>
                {
                    postMode === 'grid'
                    ? <CardMode data={ data } userRole={ userRole }/>    
                    : <ListMode data={ data } userRole={ userRole }/>
                }
            </div>
        </div>
    )
}
export default Post