import React from 'react'
import './product.css'

const Product = () => {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card shadow-lg custom-card">
                            <div className="img-div"><img src="./images/item1.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div"><img src="./images/item2.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div"><img src="./images/item3.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div"><img src="./images/item4.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div">  <img src="./images/item5.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div"><img src="./images/item6.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div"><img src="./images/item1.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <div className="img-div"><img src="./images/item2.jpg" className="card-img-top custom-image" alt="..." /></div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-warning">View Details</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
