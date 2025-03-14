import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function NewAppointment() {
    const [fname, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [disease, setDisease] = useState('Select');
    const [doctor, setDoctor] = useState('Select');
    const [address, setAddress] = useState('');
    const [tokenNumber, setTokenNumber] = useState(0); // Token state

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhoneNumber(value);
                break;
            case 'dob':
                setDob(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'disease':
                setDisease(value);
                break;
            case 'doctor':
                setDoctor(value);
                break;
            default:
                break;
        }
    };

    const formValidation = () => {
        if (fname.trim() === "") {
            toast.error("Full name is required!");
            return false;
        }
        if (phoneNumber.trim() === "") {
            toast.error("Phone number is required!");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (formValidation()) {
            const newTokenNumber = tokenNumber + 1; // Store incremented token
            setTokenNumber(newTokenNumber); // Update state

            toast.success(`Appointment submitted successfully! Token Number: ${newTokenNumber}`);

            console.log({
                fname,
                phoneNumber,
                dob,
                gender,
                disease,
                doctor,
                address,
                tokenNumber: newTokenNumber
            });

            // Clear form fields after submission
            setName('');
            setPhoneNumber('');
            setDob('');
            setGender('');
            setDisease('Select');
            setDoctor('Select');
            setAddress('');
        }
    };

    return (
        <div className='appointmentPage'>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick />

            <div className='d-flex justify-content-between align-items-end'>
                <h2>New Appointment</h2>
                <h6>Token Number: <span className='badge bg-danger'>{tokenNumber}</span></h6>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row newAppointment">
                    <div className="col-sm-6">
                        <p className="form-control-label">Full Name<span className="text-danger">*</span></p>
                        <input type="text" name="name" value={fname} placeholder="Enter your full name" onChange={handleChange} />
                    </div>

                    <div className="col-sm-6">
                        <p className="form-control-label">Phone Number<span className="text-danger">*</span></p>
                        <input type="text" name="phone" value={phoneNumber} placeholder="Enter your phone number" onChange={handleChange} />
                    </div>

                    <div className="col-sm-6">
                        <p className="form-control-label">Date of Birth</p>
                        <input type="date" name="dob" value={dob} placeholder="Enter your date of birth" onChange={handleChange} />
                    </div>

                    <div className="col-sm-6">
                        <p className="form-control-label">Gender</p>
                        <span>
                            <label htmlFor="Male">Male</label>
                            <input type="radio" id="Male" name="gender" value="Male" checked={gender === 'Male'} onChange={handleChange} />
                        </span>
                        <span>
                            <label htmlFor="Female">Female</label>
                            <input type="radio" id="Female" name="gender" value="Female" checked={gender === 'Female'} onChange={handleChange} />
                        </span>
                    </div>

                    <div className="col-sm-6">
                        <p className="form-control-label">Disease</p>
                        <select name="disease" value={disease} onChange={handleChange}>
                            <option disabled>Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className="col-sm-6">
                        <p className="form-control-label">Doctor</p>
                        <select name="doctor" value={doctor} onChange={handleChange}>
                            <option disabled>Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>

                    <div className="col-sm-12">
                        <p className="form-control-label">Address</p>
                        <input type="text" name="address" value={address} placeholder="Enter your Address" onChange={handleChange} />
                    </div>

                </div>
                <button className="btn btn-outline-primary btn-block" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewAppointment;
