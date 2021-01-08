import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';


class Home extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    infDash(e){
        this.props.history.push(`/Influ/${e.target.value}`)
    }

    compDash(e){
        this.props.history.push(`/cDash/${e.target.value}`)
    }

    render(){
        return(
            <div>
                <button onClick = {this.infDash.bind(this)} >influ</button>
                <button onClick = {this.compDash.bind(this)}>Companydisplay</button>
            </div>
        )
    }
}

export default withRouter(Home);