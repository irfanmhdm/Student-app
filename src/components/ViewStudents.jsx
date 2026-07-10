import React from "react";
import Navbar from "./Navbar";

const ViewStudents = () => {
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
              <tr>
                <td>ADM101</td>
                <td>Aadil</td>
                <td>12-05-2004</td>
                <td>Male</td>
                <td>MCA 1</td>
                <td>A</td>
                <td>Shabeer</td>
                <td>9876543210</td>
                <td>aadil@gmail.com</td>
                <td>Oachira, Kollam</td>
              </tr>

              <tr>
                <td>ADM102</td>
                <td>Akhil Raj</td>
                <td>20-09-2003</td>
                <td>Male</td>
                <td>BCA 3</td>
                <td>B</td>
                <td>Rajeev</td>
                <td>9876501234</td>
                <td>akhil@gmail.com</td>
                <td>Kayamkulam</td>
              </tr>

              <tr>
                <td>ADM103</td>
                <td>Neha Nair</td>
                <td>15-01-2004</td>
                <td>Female</td>
                <td>MCA 1</td>
                <td>A</td>
                <td>Suresh Nair</td>
                <td>9876512345</td>
                <td>neha@gmail.com</td>
                <td>Alappuzha</td>
              </tr>

              <tr>
                <td>ADM104</td>
                <td>Rahul Krishna</td>
                <td>08-11-2003</td>
                <td>Male</td>
                <td>BCA 2</td>
                <td>C</td>
                <td>Krishnan</td>
                <td>9876523456</td>
                <td>rahul@gmail.com</td>
                <td>Kottayam</td>
              </tr>

              <tr>
                <td>ADM105</td>
                <td>Anjali Menon</td>
                <td>04-04-2004</td>
                <td>Female</td>
                <td>MCA 2</td>
                <td>B</td>
                <td>Pradeep Menon</td>
                <td>9876534567</td>
                <td>anjali@gmail.com</td>
                <td>Ernakulam</td>
              </tr>

              <tr>
                <td>ADM106</td>
                <td>Arjun Nair</td>
                <td>22-07-2003</td>
                <td>Male</td>
                <td>BCA 3</td>
                <td>A</td>
                <td>Manoj Nair</td>
                <td>9876545678</td>
                <td>arjun@gmail.com</td>
                <td>Pathanamthitta</td>
              </tr>

              <tr>
                <td>ADM107</td>
                <td>Sneha Thomas</td>
                <td>17-03-2004</td>
                <td>Female</td>
                <td>MCA 1</td>
                <td>C</td>
                <td>Thomas</td>
                <td>9876556789</td>
                <td>sneha@gmail.com</td>
                <td>Kochi</td>
              </tr>

              <tr>
                <td>ADM108</td>
                <td>Aditya Sharma</td>
                <td>09-12-2003</td>
                <td>Male</td>
                <td>BCA 2</td>
                <td>B</td>
                <td>Rakesh Sharma</td>
                <td>9876567890</td>
                <td>aditya@gmail.com</td>
                <td>Thrissur</td>
              </tr>

              <tr>
                <td>ADM109</td>
                <td>Meera Joseph</td>
                <td>13-08-2004</td>
                <td>Female</td>
                <td>MCA 2</td>
                <td>A</td>
                <td>Joseph</td>
                <td>9876578901</td>
                <td>meera@gmail.com</td>
                <td>Kannur</td>
              </tr>

              <tr>
                <td>ADM110</td>
                <td>Farhan Ali</td>
                <td>30-06-2003</td>
                <td>Male</td>
                <td>BCA 3</td>
                <td>C</td>
                <td>Ali</td>
                <td>9876589012</td>
                <td>farhan@gmail.com</td>
                <td>Kasaragod</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;