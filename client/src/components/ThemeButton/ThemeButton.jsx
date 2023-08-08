import { themeModeChange } from "../../redux/themeSlice"
import { useDispatch } from 'react-redux';
const ThemeButton = ()=>{
    const dispatch = useDispatch()
    const changeTheme = ()=>{
        dispatch(themeModeChange())
    }
    return(
        <button onClick={ changeTheme }>테마 버튼</button>
    )
}
export default ThemeButton