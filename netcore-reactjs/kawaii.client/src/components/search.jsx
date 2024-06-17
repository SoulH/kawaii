import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";

const Search = ({style, onChange, onClick}) => {
    return (
    <div className="search-wrapper" style={style}>
        <div className="search-left"></div>
        <input className="search-input" onChange={onChange}/>
        <div className="search-button" onClick={onClick}>
            <FontAwesomeIcon icon={faSearch}/>
        </div>
    </div>);
};

export default Search;