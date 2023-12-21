import './SideBar.css'

function SideBar({ categories }) {
    return (
        <div className="sidebar">
            <h2>Categories</h2>
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