import './Card.css'
import TestImg from '../../assets/images/TestImg.png'
const Card = ()=>{
    return(
        <div className="Card">
            <div className='CardHeader'>
                <img src={ TestImg } alt="TestImg" />
            </div>
            <div className='CardBody'>
                <div className='CardBodyHead'>
                    <h3>4월 15일 순천만 동행구해요!</h3>
                    <p>#여수 #순천 #광양</p>
                    <p>작성자: ENDORPHIN0710</p>
                </div>
                <div className='CardBodyDesc'>
                    <p>
                    안녕하세요! <br />
                    4월 15일 순천만 동행구합니다!
                    </p>
                </div>
                <div className='CardBodyFooter'>
                    <hr />
                    <div>
                        <p>조회 38회</p>
                        <p>댓글 4개</p>
                        <p>2018/04/12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card