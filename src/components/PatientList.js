import React from "react"

function PatientList() {
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Token</th>
                        <th>First name</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Disease</th>
                        <th>Doctor</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td>Doe</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default PatientList;