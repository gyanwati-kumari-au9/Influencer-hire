import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import InfluencerDashboard from './influencer/update';
import CompanyDashboard from './company/companyDashboard';
import Header from './header';
import Footer from './footer';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header />
            <hr/>
            <div className="row">
                <div className="col-md-10">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Influ" component={InfluencerDashboard} />
                    <Route path="/cDash" component={CompanyDashboard} />
                    
                </div>
            </div>
           
            <Footer/>
        </BrowserRouter>
    )
}                                                                     

export default Routing;