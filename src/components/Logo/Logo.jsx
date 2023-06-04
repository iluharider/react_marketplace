import LogoSrc from "./logo.svg"
import "./index.css"
export const Logo = () => {
    return(<>
        <a href='/'>
            <img src={LogoSrc} alt="company logo" className="logo-pic">
            </img>
        </a>
    <span className="title">HachikoStore</span>
    </>
    )
}