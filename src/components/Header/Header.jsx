import "./style.css"
import {Logo} from "../Logo/Logo"
import { Search } from "../Search/Search"
export const Header = ({setSearchQuery, user}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                    <Logo/>
                    <Search setSearchQuery={setSearchQuery}/>
                    </div>
                    {/* <div>Войти</div>   */}
                <div>
                    <span>Ваш логин: {user.name}</span>
                    {/* <div>{user.about}</div> */}
                </div>
                </div>
            </div>
        </div>
    )
}