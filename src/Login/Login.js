import axios from "axios";
import { useState, useEffect } from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login({user, handleSetUser}) {
    const navigate = useNavigate()
    const [userdata, setUserdata] = useState({
        username: "",
        id: "",
        password: "",
        role: "player"
    });
    
    useEffect(() => {
        console.log(userdata)
        if(userdata.username) handleSetUser(userdata)
        if(userdata.id && user.id) navigate('/')
    }, [userdata, user])

    const HandleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", userdata);

            if (response.status === 200) {
                const user_id = response.data.data[0].User_id

                setUserdata(prevUserData => ({
                    ...prevUserData,
                    id: user_id
                }));

                console.log(userdata)
                handleSetUser(userdata)

            } else {
                toast.error("Invalid username, password, or role. Please try again.");
                navigate('/login');
            }
        } catch (error) {
            toast.error("Invalid username, password, or role. Please try again.");
            navigate('/login');
        }
    };
    

    return (
        <div className="Login">
            <h1>Đăng nhập</h1>
            <p><Link to="/signup">To Sign up</Link></p>
            <input
                type="text"
                placeholder="Ten nguoi dung"
                value={userdata.username}
                onChange={(e) => setUserdata({ ...userdata, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Mat khau"
                value={userdata.password}
                onChange={(e) => setUserdata({ ...userdata, password: e.target.value })}
            />
            <div>
                <input
                    type="radio"
                    name="role_id"
                    value="player"
                    checked={userdata.role === "player"}
                    onChange={() => setUserdata({ ...userdata, role: "player" })}
                />
                <label>Player</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="role_id"
                    value="game_publisher"
                    checked={userdata.role === "game_publisher"}
                    onChange={() => setUserdata({ ...userdata, role: "game_publisher" })}
                />
                <label>Game Publisher</label></div>


            <button onClick={HandleSubmit}>Submit</button>
            <ToastContainer />
        </div>
    );
}

export default Login;
