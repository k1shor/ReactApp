import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Home from './pages/Home'
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import Deals from './components/Deals'
import Count from './hooks/Count'
import Test from './hooks/Test'
import Datafetch from './hooks/Datafetch'
import Prop from './hooks/Prop'
import Main from './hooks/Main'
import Show from './context/Show'
import ComponentA from './context/ComponentA'
import FormValidation from './validation/FormValidation'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/test" component={First}/>
                <Route exact path="/welcome" component={Second}/>

                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/deals" component={Deals}/>


                {/* hooks */}
                <Route exact path="/count" component = {Count}/>
                <Route exact path="/countData" component = {Test}/>
                <Route exact path="/datafetch" component = {Datafetch}/>

                <Route exact path="/prop" component = {Prop}/>
                <Route exact path="/main" component = {Main}/>

                {/* context api */}
                <Route exact path="/context" component = {Show}/>
                <Route exact path="/ComA" component = {ComponentA}/>
                
                {/* Form Validation */}
                <Route exact path="/form" component={FormValidation}/>

            </Switch>
        </Router>
    )
}

export default Routes
