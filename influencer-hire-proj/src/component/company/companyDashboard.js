import React, { Component } from "react";
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import Pagination from '../pagination';



const url = "http://localhost:5000/influencers";

class CompanyDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            influencers: [{
                "name":"Mr. Influencer"
            }]
        };
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json()) //promise of api
        // we will get the data
        .then((data) => {
            this.setState({influencers:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    paginationClick(pageNum, offset){
        
    }

    render(){
        return(
            <div>
                <h1>Influencers </h1>
                    <CardColumns >
                    {
                        this.state.influencers.map( influencer =>(
                            
                                <Card key={influencer.id}>
                                <Card.Img variant="top" src={influencer.image} />
                                <Card.Body>
                                <Card.Title>{influencer.name}</Card.Title>
                                <Card.Text>
                                {influencer.description}
                                </Card.Text>
                                <p >
                                    <a href={influencer.youtube_link}
                                    className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" style={{color:"red"}}/>
                                    </a>
                                    <a href="https://www.facebook.com/learnbuildteach/"
                                    className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{color:"blue"}}/>
                                    </a>
                                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{color:"skyblue"}}/>
                                    </a>
                                    <a href="https://www.instagram.com/learnbuildteach"
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{color:"#8a3ab9"}}/>
                                    </a>
                                </p>
                                <Button variant="success">Hire Now</Button>
                                </Card.Body>
                            
                                </Card>
                            
                        ))
                    }
                </CardColumns>
                <Pagination perPage={} pageCount={} />
            </div>

        )
    }
}

export default CompanyDashboard;