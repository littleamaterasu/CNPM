import { useEffect, useState } from "react"
import { getUserById } from "../../../service/getUserById"
import './ThongKeContent.css'
function ThongKeContent() {
    const [userData, setUserData] = useState(null)
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        const getUser = async () => {
            const user = await getUserById(url, 1)
            console.log(user.name)
            setUserData(user)
        }
        getUser()
    },[])

    return (
        <div className="TK">
            {userData && (
                <>
                    <h4>{userData.id}</h4>
                    <h4>{userData.name}</h4>
                </>
            )}
        </div>
    )
}

export default ThongKeContent