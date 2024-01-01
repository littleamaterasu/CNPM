import './SideBar.css'

function SideBar({ categories }) {
    return (
        <div className="sidebar">
            <h1>Categories</h1>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar