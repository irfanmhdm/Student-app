import React from 'react'

const Delete = () => {
  return (
    <div><div className="container">
                <div className="row">
                    <div className="col col-12">

                        <div className="container">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-4">

                                    <label htmlFor="" className="form-label">Product Code</label>
                                    <input type="number" className="form-control" />



                                </div>
                                <div className="col col-12 g-3">

                                    <button className="btn btn-danger">Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Delete