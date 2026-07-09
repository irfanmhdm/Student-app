import React from "react";
import Navbar from "./Navbar";

const ViewStudents = () => {
  return (
    <div>
        <Navbar/>

    <div className="container mt-4">
      <h2 className="text-center mb-4">Student List</h2>

      <div className="row">

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Student"
            />
            <div className="card-body">
              <h5 className="card-title">Akhil Raj</h5>
              <p>Admission No: ST101</p>
              <p>Class: MCA 1</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Neha Nair</h5>
              <p>Admission No: ST102</p>
              <p>Class: MCA 1</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Rahul Krishna</h5>
              <p>Admission No: ST103</p>
              <p>Class: BCA 3</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Anjali Menon</h5>
              <p>Admission No: ST104</p>
              <p>Class: BCA 2</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Arjun Nair</h5>
              <p>Admission No: ST105</p>
              <p>Class: MCA 2</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Sneha Thomas</h5>
              <p>Admission No: ST106</p>
              <p>Class: BCA 1</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Aditya Sharma</h5>
              <p>Admission No: ST107</p>
              <p>Class: MCA 1</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Meera Joseph</h5>
              <p>Admission No: ST108</p>
              <p>Class: BCA 3</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

      
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Farhan Ali</h5>
              <p>Admission No: ST109</p>
              <p>Class: MCA 2</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

      
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card text-center shadow">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Student" />
            <div className="card-body">
              <h5 className="card-title">Diya George</h5>
              <p>Admission No: ST110</p>
              <p>Class: MCA 1</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ViewStudents;