// UserAvt.js
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UserAvt.css";

function UserAvt({ handleSetActive, handleSetUser, user }) {
    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()

    const handleSetPopup = () => {
        setPopup((prev) => !prev)
    };

    const handleLogout = () => {
        const tmp = {
            username: "",
            email: "",
            id: "",
            user_role: "player"
        }
        handleSetUser(tmp);
        navigate("/login");
        setPopup(false);
    };

    const handleToLogIn = () =>{
        navigate("/login")
        setPopup(false)
    }

    return (
        <div className="user-avatar-container">
            <div className="avt">
                <FaUser onClick={handleSetPopup} />
            </div>

            {popup && (
                <div className="popup">
                    {(user && (
                        <ul>
                            <li onClick={() => handleSetActive("Thongke")}>Thống kê</li>
                            <li onClick={() => handleSetActive("ChangeInfo")}>Chỉnh sửa thông tin</li>
                            <li onClick={handleLogout}>Đăng xuất</li>
                        </ul>)
                    ) || (
                            <ul>
                                <li onClick={handleToLogIn}>Đăng nhập</li>
                            </ul>
                        )}
                </div>
            )}
        </div>
    );
}

export default UserAvt;
