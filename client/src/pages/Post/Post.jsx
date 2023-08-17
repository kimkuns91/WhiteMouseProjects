import Card from "../../components/Card/Card"
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import { modeChange } from '../../redux/postSlice';
import { useEffect, useState } from "react"
import { findAllPost } from "../../services/postService"
const Post = ()=>{
    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState([])
    const postMode = useSelector((state) => state.post.value)
    const dispatch = useDispatch()

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
            <div className="CustomWrap">
                <div className="PostControlWrap">
                    <div className="modeChangeWrap">
                        <div onClick={()=>{
                            dispatch(modeChange('grid'))
                        }} className={
                            postMode === 'grid'
                            ? 'modeChangeBtn modeChangeBtnActive'
                            : 'modeChangeBtn'
                        }>
                            <FontAwesomeIcon icon={faGrip} />
                        </div>
                        <div onClick={()=>{
                            dispatch(modeChange('list'))
                        }} className={
                            postMode === 'list'
                            ? 'modeChangeBtn modeChangeBtnActive'
                            : 'modeChangeBtn'
                        }>
                            <FontAwesomeIcon icon={faList} />
                        </div>
                    </div>
                </div>
                {
                    postMode === 'grid'
                    ? <div className="CardModeWrap">
                    {
                        data.map((post, index)=>
                            <div className="CardWrap" key={ index }>
                                <Card 
                                    url={`/post/${ post._id }`}
                                    title={ post.title }
                                    keyword={ post.keyword } 
                                    desc={ post.desc } 
                                    views={ post.views } 
                                    comment={ post.comment.length } 
                                    createdAt={ post.createdAt }
                                />
                            </div>
                        )
                    }
                    </div>       
                    : <div className="ListWrap">
                    <div className="ListHead">
                        <div className="ListWrap01">번호</div>
                        <div className="ListWrap02">제목</div>
                        <div className="ListWrap03">조회수</div>
                        <div className="ListWrap04">작성시간</div>
                    </div>
                    {
                        data.map((post, index)=>
                            <div className="ListBody" key={ index }>
                                <div className="ListWrap01">1</div>
                                <a href={`/post/${ post._id }`} className="ListWrap02">{ post.title }</a>
                                <div className="ListWrap03">{ post.views }</div>
                                <div className="ListWrap04">{ post.createdAt.slice(0, 10) }</div>
                            </div>
                        )
                    }
                </div>
                }
                <a href="/project/editor">글 작성</a>
            </div>
        </div>
    )
}
export default Post