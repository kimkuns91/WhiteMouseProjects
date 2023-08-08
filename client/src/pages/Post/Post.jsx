import Card from "../../components/Card/Card"
import './Post.css'

const Post = ()=>{
    return(
        <div className="Post Pages">
            <div className="CustomWrap">
                <div className="CardWrap">
                    <Card />
                </div>
                <div className="CardWrap">
                    <Card />
                </div>
                <div className="CardWrap">
                    <Card />
                </div>
                <a href="/project/editor">Post Editor</a>
            </div>
        </div>
    )
}
export default Post