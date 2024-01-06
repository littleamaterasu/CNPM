// UserAvt.js
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./UserAvt.css";

function UserAvt({handleSetActive}) {
    const [popup, setPopup] = useState(false)

    const handleSetPopup = () => {
        setPopup((prev) => !prev)
    };

    return (
        <div className="user-avatar-container">
            <div className="avt">
                <FaUser onClick={handleSetPopup} />
            </div>

            {popup && (
                <div className="popup">
                    <ul>
                        <li onClick={() => handleSetActive("Thongke")}>Thống kê</li>
                        <li onClick={() => handleSetActive("ChangeInfo")}>Chỉnh sửa thông tin</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserAvt;
