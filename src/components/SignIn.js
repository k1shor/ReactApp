import React from 'react'
import Footer from './layout/Footer'
import Nav from './layout/Nav'

const SignIn = () => {
    return (
        <>
            <Nav />
            <div className="col-md-6 offset-md-3 p-3 shadow-lg my-3">
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingUsername" placeholder="Lastname" />
                            <label htmlFor="floatingUsername">User Name</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me.
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default SignIn
