import './Card.css'
import TestImg from '../../assets/images/TestImg.png'

const Card = ({ url, title, keyword, desc, views, comment, createdAt })=>{
    return(
        <a href={ url } className="Card">
            <div className='CardHeader'>
                <img src={ TestImg } alt="TestImg" />
            </div>
            <div className='CardBody'>
                <div className='CardBodyHead'>
                    <h3 className='HL06'>{ title }</h3>
                    <p className='CT01'>{ keyword }</p>
                </div>
                <div className='CardBodyDesc'>
                    {/* <p className='BD01'>{ desc }</p> */}
                    <div className='BD01 HTML' dangerouslySetInnerHTML={{ __html : desc }}/>
                </div>
                <div className='CardBodyFooter'>
                    <p className='CT02'>조회 { views }</p>
                    <p className='CT02'>댓글 { comment }</p>
                    <p className='CT02'>{ createdAt }</p>
                </div>
            </div>
        </a>
    )
}
export default Card