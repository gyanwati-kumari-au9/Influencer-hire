import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import Home from '../container/Home'
import Header from './header';
import Footer from './footer';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header />
            <div className="row">
                <div className="col-md-10">
                    {/* <Route exact path="/" component={Home}/> */}
                    
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}                                                                     

export default Routing;