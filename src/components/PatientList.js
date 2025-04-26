import axios from "axios";
import React, { useEffect, useState } from "react";

function PatientList() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/api/student_details')
            .then((res) => {
                console.log(res.data);
                setTableData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Token</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Disease</th>
                        <th>Doctor</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? (
                        tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Token}</td>
                                <td>{item.Name}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Age}</td>
                                <td>{item.Gender}</td>
                                <td>{item.Disease}</td>
                                <td>{item.Doctor}</td>
                                <td>{item.Address}</td>
                                <td><button className="btn btn-primary w-100">Print</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default PatientList;
