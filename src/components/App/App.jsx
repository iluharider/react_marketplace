import { useEffect, useState } from 'react'
import { CardList } from '../CardList/CardList'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import "./App.css"
import data from '../../data/data.json'
import { api } from '../../utilities/API'


function App(){
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (search) => {
        api.search(search).then((data) => setCards(data));
    }
    function handleLike(product) {
        let isLiked = product.likes.some(el => el === currentUser._id);
        isLiked ? api.deleteLike(product._id).then((newCard) => {
            const newCards = cards.map((e) => (e._id === newCard._id) ? newCard : e);
            setCards([...newCards]); //та карточка, которая обновилась, должна быть занесена в список, и список рендерится заново
        }) 
        : api.addLike(product._id).then((newCard) => {
            const newCards = cards.map((e) => (e._id === newCard._id) ? newCard : e);
            setCards([...newCards]); //та карточка, которая обновилась, должна быть занесена в список, и список рендерится заново
        }) 
    }

    const debounceValueInApp = useDebounce(searchQuery, 500);
    
    useEffect(()=>{
        // if(!searchQuery) return setCards(cards);
        // const newState = data.filter((e) => (e.name.toLowerCase()).includes(searchQuery.toLowerCase()));
        // setCards(newState);

        // handleSearch(searchQuery);

        handleSearch(debounceValueInApp);
        console.log({debounceValueInApp});
    }, [debounceValueInApp]);


    useEffect(() => {
        Promise.all([api.getProductList(), api.getUserInfo()]).then(([productList, userData]) => {
            setCards(productList.products);
            setCurrentUser(userData);
        })
        // api.getProductList().then((data) => setCards(data.products));
        // api.getUserInfo().then((data) => setCurrentUser(data));
    },[]);
    // console.log('>>>>>')

    return(
        <>
        <Header user={currentUser} setSearchQuery={setSearchQuery}/>
            <main className='content container'>
                {searchQuery && <p>По запросу '{searchQuery}' найдено {cards.length} {calcEnding(cards.length)}</p>}
                <CardList currentUser={currentUser} handleLike={handleLike} cards={cards}/>
            </main>
        <Footer/>
        </>
    )
}

export default App



function calcEnding(len){
    if (len === 1) return ' товар';
    if (len > 1 && len < 5) return ' товарa';
    else return ' товаров';
}

const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        console.log({timeout});

        return () => clearTimeout(timeout);
    }, [value]);
    return debounceValue;    
}
