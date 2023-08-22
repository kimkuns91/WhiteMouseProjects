import { useState } from "react";
import Card from "../Card/Card"
import Paging from "../Paging/Paging";
import { useSelector } from "react-redux";
import './CardMode.css'

const CardMode = ({ data, userRole, ContentTitle })=>{
    const [ page, setPage ] = useState(1);

    const itemsCountPerPage = 6
    const indexOfLast = page * itemsCountPerPage;
    const indexOfFirst = indexOfLast - itemsCountPerPage;
    let currentData = data.slice(indexOfFirst, indexOfLast);

    return(
        <>
            <div className="CardModeWrap">
                {
                    currentData.map((post, index)=>
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
            {
                userRole === 'Admin' && ContentTitle === 'POST'
                ? <a href="/project/editor" className="Btn FLR">글 작성</a>
                : null
            }
            <Paging
                page={ page } 
                itemsCountPerPage = { itemsCountPerPage }
                count={ data.length } 
                setPage={ setPage }
            />
        </>
    )
}
export default CardMode