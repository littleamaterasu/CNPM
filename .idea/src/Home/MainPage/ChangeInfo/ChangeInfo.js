import './ChangeInfo.css'
import { getUserById } from '../../../service/getUserById'
import { useState, useEffect } from 'react'
function ChangeInfo(){
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            const user = await getUserById(1)
            setUserData(user)
        }
        getUser()
    },[])

    return (
        <div className="ChangeInfo">
            {userData && (
                <>
                    <input type="text" placeholder={userData.name}/>
                    <input type="text" placeholder={userData.id}/>
                </>
            )}
        </div>
    )
}

export default ChangeInfo