import "./style.css"
import { ReactComponent as Like } from "./like.svg"


export const Card = ({currentUser, product, name, pictures, discount, price, wight, onProductLike}) => {
    const handleLikeClick = () => {
        onProductLike(product)
    }
    let isLiked = product.likes.some(el => el === currentUser._id);

    return(
        <div className="card">
            <div className="card__sticky card__sticky_type_top-left">
                {discount != '0' && <span className="card__discount">-{discount}%</span>}
            </div>

            <div className="card__sticky card__sticky_type_top-right">
                <button onClick={handleLikeClick} className={`card__favourite ${isLiked ? 'card__favourite_active' : ''}`}>
                    <Like className='card__liked'/>
                </button>
            </div>


        <a href="/" className="card__link">
            <img src={pictures} alt="card__image" className="card__image"/>
            <div className="card__desc">
            {discount != '0' && <span className="sale_price">{price} руб</span>}
                <span className="card__price">{price - price*discount*0.01} руб</span>
                <span className="card__amount">{wight}</span>
                <p className="card__name">{name}</p>
            </div>
        </a>
        <a className="card__card btn btn_type_primary" href='/'>В корзину</a>
        </div>

    )
}


