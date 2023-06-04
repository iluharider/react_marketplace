import "./style.css"
export const Search = ({setSearchQuery}) => {
    return(
        <input onChange={(e) => {setSearchQuery(e.target.value)}} placeholder="Поиск по товарам" className="search__input">

        </input>
    )
}