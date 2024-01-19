import React, { useEffect, useState } from 'react';
import './SideBar.css';

function SideBar({ categories, handleSetGameSelectedList, handleSetActive }) {
    const [data, setData] = useState([]);
    const [genre, setGenre] = useState('');

    const handleSetGenre = (selectedGenre) => {
        setGenre(selectedGenre);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/game/find?genre=${genre}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [genre]);

    const handleShowResult = (e) => {
        handleSetGameSelectedList(e)
        handleSetActive("gameSelectedList")
    }

    return (
        <div className="sidebar">
            <h1>Categories</h1>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => {handleSetGenre(category); handleShowResult(data)}}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
