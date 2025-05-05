import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import jsPDF from "jspdf";

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

    const handlePrint = (patient) => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("Patient Details", 80, 20);

        doc.setFontSize(12);
        const entries = [
            { label: "Token", value: patient.Token },
            { label: "Name", value: patient.Name },
            { label: "Phone", value: patient.Phone },
            { label: "Age", value: patient.Age },
            { label: "Gender", value: patient.Gender },
            { label: "Disease", value: patient.Disease },
            { label: "Doctor", value: patient.Doctor },
            { label: "Address", value: patient.Address },
        ];

        let y = 40;
        entries.forEach(({ label, value }) => {
            doc.text(`${label}: ${value}`, 20, y);
            y += 10;
        });

        // Automatically open print dialog
        doc.autoPrint();
        window.open(doc.output('bloburl'), '_blank');
    };

    return (
        <div className="table-responsive">
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
                                <td>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handlePrint(item)}
                                    >
                                        Print <MdOutlineLocalPrintshop />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default PatientList;
