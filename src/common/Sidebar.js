import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const sidebar_menu = [
        { name: "Home", link: "/", icon: <IoHomeOutline /> },
        { name: "New Appointment", link: "/NewAppointment", icon: <HiOutlinePencilSquare /> },
        { name: "Patient List", link: "/patientList", icon: <CiBoxList /> }
    ];

    const [activeTab, setActiveTab] = useState(location.pathname);
    const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = () => setIsCollapsed(!isCollapsed);

    return (
        <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <ul className='sidebar-menu'>
                {sidebar_menu.map((item) => (
                    <li key={item.link}>
                        <Link to={item.link} className={`${activeTab === item.link ? 'active' : ''}`}>
                            {item.icon}
                            {!isCollapsed && <span>{item.name}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='sidebar-btn' onClick={handleToggle}>
                {isCollapsed ? <IoIosArrowDropright /> : <IoIosArrowDropleft />}
            </div>
        </div>
    );
}

export default Sidebar;
