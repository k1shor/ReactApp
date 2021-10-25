import React from 'react'
import Footer from './layout/Footer'
import Nav from './layout/Nav'

const Signup = () => {
    return (
        <>
            <Nav />
            <div className="col-md-6 offset-md-3 p-3 shadow-lg my-3">
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Sign up form</h1>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFname" placeholder="Firstname" />
                            <label htmlFor="floatingFname">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingLname" placeholder="Lastname" />
                            <label htmlFor="floatingLname">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingUsername" placeholder="Lastname" />
                            <label htmlFor="floatingUsername">User Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Signup
