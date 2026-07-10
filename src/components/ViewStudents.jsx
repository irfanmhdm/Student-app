import React, { useState } from "react";
import Navbar from "./Navbar";

const ViewStudents = () => {
  const [data, changeData] = useState([
    {
      admissionNo: "ADM101",
      name: "Aadil",
      dateOfBirth: "12-05-2004",
      gender: "Male",
      class: "MCA 1",
      section: "A",
      parentName: "Shabeer",
      contactNumber: "9876543210",
      email: "aadil@gmail.com",
      address: "Oachira, Kollam",
    },
    {
      admissionNo: "ADM102",
      name: "Anjali",
      dateOfBirth: "08-11-2003",
      gender: "Female",
      class: "MCA 1",
      section: "B",
      parentName: "Pradeep",
      contactNumber: "9876543211",
      email: "anjali@gmail.com",
      address: "Kayamkulam, Alappuzha",
    },
    {
      admissionNo: "ADM103",
      name: "Rahul",
      dateOfBirth: "15-01-2004",
      gender: "Male",
      class: "MCA 2",
      section: "A",
      parentName: "Suresh",
      contactNumber: "9876543212",
      email: "rahul@gmail.com",
      address: "Kottayam, Kerala",
    },
    {
      admissionNo: "ADM104",
      name: "Neha",
      dateOfBirth: "22-07-2003",
      gender: "Female",
      class: "MCA 2",
      section: "C",
      parentName: "Rajesh",
      contactNumber: "9876543213",
      email: "neha@gmail.com",
      address: "Thrissur, Kerala",
    },
    {
      admissionNo: "ADM105",
      name: "Arjun",
      dateOfBirth: "30-09-2004",
      gender: "Male",
      class: "MCA 1",
      section: "B",
      parentName: "Manoj",
      contactNumber: "9876543214",
      email: "arjun@gmail.com",
      address: "Kochi, Ernakulam",
    },
  ]);

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Student Details</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Admission No.</th>
                <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Section</th>
                <th>Parent/Guardian</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td>{value.admissionNo}</td>
                  <td>{value.name}</td>
                  <td>{value.dateOfBirth}</td>
                  <td>{value.gender}</td>
                  <td>{value.class}</td>
                  <td>{value.section}</td>
                  <td>{value.parentName}</td>
                  <td>{value.contactNumber}</td>
                  <td>{value.email}</td>
                  <td>{value.address}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;