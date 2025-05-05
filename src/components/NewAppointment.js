import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { jsPDF } from "jspdf";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function NewAppointment() {
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Age, setAge] = useState('');
    const [Gender, setGender] = useState('');
    const [Disease, setDisease] = useState('Select');
    const [Doctor, setDoctor] = useState('Select');
    const [Address, setAddress] = useState('');
    const [Token, setTokenNumber] = useState(0); // Token state
    const [AppointmentDate, setAppointmentDate] = useState(''); // State to store current date

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    // Reset the token if the date has changed
    useEffect(() => {
        if (AppointmentDate !== currentDate) {
            setTokenNumber(0); // Reset token number when date changes
            setAppointmentDate(currentDate); // Update the appointment date
        }
    }, [currentDate, AppointmentDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'Name':
                setName(value);
                break;
            case 'Phone':
                setPhone(value);
                break;
            case 'Age':
                setAge(value);
                break;
            case 'Address':
                setAddress(value);
                break;
            case 'Gender':
                setGender(value);
                break;
            case 'Disease':
                setDisease(value);
                break;
            case 'Doctor':
                setDoctor(value);
                break;
            default:
                break;
        }
    };

    const formValidation = () => {
        if (Name.trim() === "") {
            toast.error("Full name is required!");
            return false;
        }
        if (Phone.trim() === "") {
            toast.error("Phone number is required!");
            return false;
        }
        return true;
    };

    const generatePDF = (data) => {
        const doc = new jsPDF();
    
        doc.setFontSize(18);
        doc.text("Appointment Details", 20, 20);
    
        doc.setFontSize(12);
        doc.text(`Date: ${data.AppointmentDate}`, 20, 30); // Include the date in the PDF
        doc.text(`Name: ${data.Name}`, 20, 40);
        doc.text(`Phone: ${data.Phone}`, 20, 50);
        doc.text(`Age: ${data.Age}`, 20, 60);
        doc.text(`Gender: ${data.Gender}`, 20, 70);
        doc.text(`Disease: ${data.Disease}`, 20, 80);
        doc.text(`Doctor: ${data.Doctor}`, 20, 90);
        doc.text(`Address: ${data.Address}`, 20, 100);
        doc.text(`Token Number: ${data.Token}`, 20, 110);
    
        // Instead of save(), open print preview
        doc.autoPrint();
        window.open(doc.output('bloburl'));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (formValidation()) {
            const newTokenNumber = Token + 1;
    
            axios.post('/api/student_details', {
                Name,
                Phone,
                Age,
                Gender,
                Disease,
                Doctor,
                Address,
                Token: newTokenNumber,
                AppointmentDate // Include the current date in the API request
            })
            .then(() => {
                setTokenNumber(newTokenNumber); // Update token number
                toast.success(`Appointment submitted successfully! Token Number: ${newTokenNumber}`);
                generatePDF({
                    Name,
                    Phone,
                    Age,
                    Gender,
                    Disease,
                    Doctor,
                    Address,
                    Token: newTokenNumber,
                    AppointmentDate // Pass the date to the PDF
                });

                // Clear form
                setName('');
                setPhone('');
                setAge('');
                setGender('');
                setDisease('Select');
                setDoctor('Select');
                setAddress('');
            })
            .catch((err) => {
                console.error("❌ Axios error:", err);
                toast.error("Failed to submit appointment. Try again.");
            });
        }
    };

    return (
        <div className='appointmentPage'>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick /> 

            <div className='d-flex justify-content-between align-items-end flex-wrap mb-5 border-bottom'>
                <h2>New Appointment</h2>
                <h6>Date: <span className='badge bg-primary'>{AppointmentDate}</span></h6> {/* Display current date */}
                <h6>Token Number: <span className='badge bg-danger'>{Token}</span></h6>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row newAppointment">
                    <div className="col-sm-12 col-md-4">
                        <p className="form-control-label">Full Name<span className="text-danger">*</span></p>
                        <input type="text" name="Name" value={Name} placeholder="Enter your full name" onChange={handleChange} />
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <p className="form-control-label">Phone Number<span className="text-danger">*</span></p>
                        <input type="tel" name="Phone" value={Phone} placeholder="Enter your phone number" onChange={handleChange} />
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <p className="form-control-label">Age</p>
                        <input type="number" name="Age" value={Age} placeholder="Enter your date of birth" onChange={handleChange} />
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <p className="form-control-label">Gender</p>
                        <span>
                            <label htmlFor="Male">Male</label>
                            <input type="radio" id="Male" name="Gender" value="Male" checked={Gender === 'Male'} onChange={handleChange} />
                        </span>
                        <span>
                            <label htmlFor="Female">Female</label>
                            <input type="radio" id="Female" name="Gender" value="Female" checked={Gender === 'Female'} onChange={handleChange} />
                        </span>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <p className="form-control-label">Disease</p>
                        <select name="Disease" value={Disease} onChange={handleChange}>
                            <option value="" disabled>Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <p className="form-control-label">Doctor</p>
                        <select name="Doctor" value={Doctor} onChange={handleChange}>
                            <option value="" disabled>Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className="col-sm-12">
                        <p className="form-control-label">Address</p>
                        <input type="text" name="Address" value={Address} placeholder="Enter your Address" onChange={handleChange} />
                    </div>

                </div>
                <button className="btn btn-outline-primary btn-block" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewAppointment;