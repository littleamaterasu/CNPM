import './ChangeInfo.css'
import { getUserById } from '../../../service/getUserById'
import { useState, useEffect } from 'react'
function ChangeInfo() {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            const user = await getUserById('https://jsonplaceholder.typicode.com/users', 1)
            setUserData(user)
        }
        getUser()
    }, [])

    return (
        <div className="ChangeInfo">
            {userData && (
                <form>
                    <h1>Chang your information</h1>
                    <h3>name</h3>
                    <input type="text" placeholder={userData.name} />
                    <h3>user name</h3>
                    <input type="text" placeholder={userData.username} />
                    <h3>email</h3>
                    <input type="text" placeholder={userData.email} />
                    <br></br>
                    <input type="submit" value='Submit' />
                </form>
            )}
        </div>
    )
}

export default ChangeInfo