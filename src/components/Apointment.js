import React, { useState } from 'react';
import NewAppointment from './NewAppointment';
import PatientList from './PatientList';

function Appointment() {
    const appointment_menu = [
        {
            "name": "New Appointment",
            "link": "/newAppoint"
        },
        {
            "name": "Patient List",
            "link": "/patientList"
        }
    ];

    const [activeTab, setActiveTab] = useState(null); // No default tab active
    const [showMenu, setShowMenu] = useState(true); // Controls menu visibility

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setShowMenu(false); // Hide menu when a tab is clicked
    };

    const handleBackClick = () => {
        setActiveTab(null); // Reset active tab
        setShowMenu(true); // Show menu again
    };

    return (
        <div className='container'>
            {/* Tab Navigation */}
            {showMenu ? (
                <div className='d-flex flex-wrap mt-5'>
                    {appointment_menu.map((item) => (
                        <div key={item.link}>
                            <div
                                className={`appoint_div ${activeTab === item.link.split('/')[1] ? 'active' : ''}`}
                                onClick={() => handleTabClick(item.link.split('/')[1])}>
                                <img alt={item.name} />
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="back-btn mt-3" onClick={handleBackClick} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                    Back
                </div>
            )}

            {/* Tab Content */}
            <div className='tab-content mt-4 mb-4'>
                {activeTab === 'newAppoint' && <NewAppointment />}
                {activeTab === 'patientList' && <PatientList />}
            </div>
        </div>
    );
}

export default Appointment;
