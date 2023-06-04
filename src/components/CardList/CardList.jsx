import { Card } from "../Card/Card"
import './style.css'
// import data from "../../data/data.json"
export const CardList = ({currentUser, cards, handleLike}) => {
    // console.log({data})
    return(
        <div className="cards">
            {cards.map((item, index) => (
                <Card currentUser={currentUser} product={item} onProductLike={handleLike} {...item} key={`${index}--${item.name}`}/>
            ))}
        </div>
    )
}