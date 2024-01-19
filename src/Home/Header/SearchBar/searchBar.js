import { useState, useEffect, useRef } from "react";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import './searchBar.css';

const SearchBar = ({ handleSetActive, handleSetGameSelectedList }) => {
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/game/all')
            .then(res => res.json())
            .then(json => {
                setFilterD(json.data);
            });
    }, []);

    const [data, setData] = useState([]);
    const [filterD, setFilterD] = useState([]);
    const [showList, setShowList] = useState(true);
    const [Input, setInput] = useState(false)

    const inputRef = useRef(null);

    const handleFilter = (e) => {
        const res = filterD.filter(f => f.name.toLowerCase().includes(e.toLowerCase()) && e);
        if (e) setInput(true)
        else setInput(false)
        setData(res);
    };

    const onBarClick = () => {
        setShowList(true)
    }

    const handleUserClick = (type, user) => {
        hideList();
        handleSetActive(type, user);
    };

    const handleShowResult = (type, Data) => {
        hideList()
        handleSetActive(type)
        handleSetGameSelectedList(Data)
    }

    const hideList = () => {
        setShowList(false);
    };

    const renderList = () => {
        if (data.length === 0) {
            return <p>No result</p>;
        }

        return (
            <ul>
                {data.map((Data, Key) => (
                    <li onClick={() => handleUserClick("GameInfo", Data)} key={Key}>
                        {Data.name})
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="SearchBar">

            <div className="Input" ref={inputRef}>
                <input
                    type="text"
                    placeholder="Nhập tên trò chơi"
                    onClick={onBarClick}
                    onChange={(e) => handleFilter(e.target.value)}
                />

                <FaRegTimesCircle
                    onClick={hideList}
                    style={{ color: 'white', cursor: 'pointer', marginLeft: '10px', marginBottom:'7px' }}
                />

                <FaSearch
                    onClick={() => handleShowResult("gameSelectedList", data)}
                    style={{ color: 'white', cursor: 'pointer', marginLeft: '10px', marginBottom:'7px' }}
                />
                
            </div>

            {Input && showList && (
                <div className="res">
                    {renderList()}
                </div>
            )}

        </div>
    );
}

export default SearchBar;
