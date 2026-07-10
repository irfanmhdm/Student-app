import React from "react";

const ViewStudents = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-secondary text-white">
          <h3 className="mb-0 text-center">Student Details</h3>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Department</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>STU101</td>
                  <td>Muhammed Irfan</td>
                  <td>MCA</td>
                  <td>1</td>
                  <td>Computer Applications</td>
                  <td>irfan101@example.com</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>STU102</td>
                  <td>Akhil Raj</td>
                  <td>BCA</td>
                  <td>6</td>
                  <td>Computer Applications</td>
                  <td>akhil.raj@example.com</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>STU103</td>
                  <td>Neha Nair</td>
                  <td>BSc Computer Science</td>
                  <td>4</td>
                  <td>Computer Science</td>
                  <td>neha.nair@example.com</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>STU104</td>
                  <td>Rahul Krishna</td>
                  <td>MCA</td>
                  <td>2</td>
                  <td>Computer Applications</td>
                  <td>rahul.krishna@example.com</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>STU105</td>
                  <td>Anjali Menon</td>
                  <td>B.Tech CSE</td>
                  <td>8</td>
                  <td>Computer Science</td>
                  <td>anjali.menon@example.com</td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>STU106</td>
                  <td>Aditya Sharma</td>
                  <td>MSc Data Science</td>
                  <td>3</td>
                  <td>Data Science</td>
                  <td>aditya.sharma@example.com</td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>STU107</td>
                  <td>Sneha Thomas</td>
                  <td>BCA</td>
                  <td>5</td>
                  <td>Computer Applications</td>
                  <td>sneha.thomas@example.com</td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>STU108</td>
                  <td>Arjun Nair</td>
                  <td>MCA</td>
                  <td>1</td>
                  <td>Computer Applications</td>
                  <td>arjun.nair@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewStudents;