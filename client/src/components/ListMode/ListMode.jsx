import { useState } from "react";
import Paging from "../Paging/Paging";

const ListMode = ({ data, userRole }) => {
    const [ page, setPage ] = useState(1);

    const itemsCountPerPage = 10
    const indexOfLast = page * itemsCountPerPage;
    const indexOfFirst = indexOfLast - itemsCountPerPage;
    let currentData = data.slice(indexOfFirst, indexOfLast);
    let dataNum = data.length - indexOfFirst
    return(
        <div className="ListMode"> 
            <div className="ListWrap">
                <div className="ListHead">
                    <div className="ListWrap01">번호</div>
                    <div className="ListWrap02">제목</div>
                    <div className="ListWrap03">조회수</div>
                    <div className="ListWrap04">작성시간</div>
                </div>
                {
                    currentData.map((post, index)=>
                        <div className="ListBody" key={ index }>
                            <div className="ListWrap01">{ dataNum - index }</div>
                            <a href={`/post/${ post._id }`} className="ListWrap02">{ post.title }</a>
                            <div className="ListWrap03">{ post.views }</div>
                            <div className="ListWrap04">{ post.createdAt.slice(0, 10) }</div>
                        </div>
                    )
                }
            </div>
            {
                userRole === 'Admin'
                ? <div className="BtnWrap">
                    <a href="/project/editor" className="Btn FLR">글 작성</a>
                </div> 
                : null
            }
            <Paging
                page={ page } 
                itemsCountPerPage = { itemsCountPerPage }
                count={ data.length } 
                setPage={ setPage }
            />

        </div>
    )
}
export default ListMode