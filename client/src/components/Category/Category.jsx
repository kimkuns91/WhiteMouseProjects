const Category = ({ handleCategory })=>{
    return(
        <select name="category" id="category" onChange={ handleCategory }>
            <option value="카테고리 없음">카테고리 없음</option>
            <option value="React">React</option>
            <option value="NodeJS">NodeJS</option>
        </select>
    )
}
export default Category