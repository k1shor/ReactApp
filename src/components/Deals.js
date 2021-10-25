import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import './product.css'

const Deals = () => {
    return (
        <>
            <Nav />
            <div className="deals">
                <div className="row container-fluid">
                    <h4>Deals and Promotions</h4>
                    <h6>Shop Today's Deals, Lighting Deals, and Limited-time Discounts</h6>
                    <h6>Showing 1 to 16 of 100 results</h6>
                </div>
                <div className="row container-fluid">
                    <div className="col-md-2 my-3">
                        <form>
                        <h6>
                            Departments
                        </h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck0" />
                                <label className="form-check-label" for="flexCheck0">
                                    Arts, Crafts and Sewing
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck1" />
                                <label className="form-check-label" for="flexCheck1">
                                    Mobiles
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                                <label className="form-check-label" for="flexCheck2">
                                    Laptop and Desktops
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck3" />
                                <label className="form-check-label" for="flexCheck3">
                                    Television
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck4" />
                                <label className="form-check-label" for="flexCheck4">
                                    Beauty and Fashion
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck5" />
                                <label className="form-check-label" for="flexCheck5">
                                    Home and Appliances
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck6" />
                                <label className="form-check-label" for="flexCheck6">
                                    Computer and Accessories
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck7" />
                                <label className="form-check-label" for="flexCheck7">
                                    Gaming and Consoles
                                </label>
                            </div>
                        </form>
                        <Link to="#" className="text-decoration-none">See More Departments</Link>

                        <br /><br />
                        <h6>
                            Deal Type
                        </h6>
                        <Link to="#" className="text-decoration-none">Deal of the Day</Link><br />
                        <Link to="#" className="text-decoration-none">Lighting Deals</Link><br />
                        <Link to="#" className="text-decoration-none">Savings and Sales</Link><br />
                        <Link to="#" className="text-decoration-none">Prime Early Access Deals</Link><br />

                        <br />
                        <h6>
                            Availability
                        </h6>
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck01" />
                                <label className="form-check-label" for="flexCheck01">
                                    Active
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck02" />
                                <label className="form-check-label" for="flexCheck02">
                                    Upcoming
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheck03" />
                                <label className="form-check-label" for="flexCheck03">
                                    Missed
                                </label>
                            </div>
                        </form>

                        <br />
                        <h6>
                            Price
                        </h6>
                        <Link to="#" className="text-decoration-none">Under $25</Link><br />
                        <Link to="#" className="text-decoration-none">$25 to $50</Link><br />
                        <Link to="#" className="text-decoration-none">$50 to $100</Link><br />
                        <Link to="#" className="text-decoration-none">$100 to $200</Link><br />
                        <Link to="#" className="text-decoration-none">$200 and Above</Link><br />

                        <br />
                        <h6>
                            Discount
                        </h6>
                        <Link to="#" className="text-decoration-none">10% Off or More</Link><br />
                        <Link to="#" className="text-decoration-none">25% Off or More</Link><br />
                        <Link to="#" className="text-decoration-none">50% Off or More</Link><br />
                        <Link to="#" className="text-decoration-none">70% Off or More</Link><br />

                        <br />
                        <h6>
                            Avg. Customer Review
                        </h6>
                        <Link to="#" className="text-decoration-none"><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i> and Up</Link><br />
                        <Link to="#" className="text-decoration-none"><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i> and Up</Link><br />
                        <Link to="#" className="text-decoration-none"><i className="far fa-star"></i><i className="far fa-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i> and Up</Link><br />
                        <Link to="#" className="text-decoration-none"><i className="far fa-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i> and Up</Link><br />
                        <Link to="#" className="text-decoration-none"><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i><i className="fas fa-star custom-text-star"></i> and Up</Link><br />
                    </div >

                    <div className="col-md-10 my-3">
                        <div className="container-fluid mt-3">
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                <div className="col">
                                    <div className="card custom-card">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item1.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item2.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">

                                            <div className="img-div"><img src="./images/item3.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item4.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div">  <img src="./images/item5.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item6.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item1.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item2.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg custom-card">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item1.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item2.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item3.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item4.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div">  <img src="./images/item5.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item6.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item1.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-lg">
                                        <center><h5 className="card-title">Card title</h5></center>
                                        <div className="card-body">
                                            <div className="img-div"><img src="./images/item2.jpg" className="card-img-top custom-image" alt="..." /></div>
                                            <center><button className="btn btn-success">Add to Cart</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Deals
