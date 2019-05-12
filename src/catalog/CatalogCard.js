import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class CatalogCard extends Component {

    render(){
        return(
            <React.Fragment>
                <NavLink to={`/card/${this.props._id}`} activeStyle={{color: "seagreen"}}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.body}</p>
                </NavLink>
            </React.Fragment>
        )
    }
}

export default withRouter(CatalogCard);