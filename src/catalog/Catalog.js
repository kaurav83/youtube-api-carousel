import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CatalogCard from './CatalogCard';
import data from '../db.json';

class Catalog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.setState({
            posts: data
        })
    }
    render() {
        return(
            <React.Fragment>
                <div><Link to="/" >Home</Link></div>

                <div style={{marginTop: "60px"}}>
                    <ul>
                        {
                            this.state.posts ? 
                                this.state.posts.map(post => {
                                    return <li key={post.id} style={{listStyle: "none"}}>
                                        <CatalogCard 
                                            userId={post.userId}  
                                            title={post.title}
                                            body={post.body}
                                            _id={post.id}
                                        />
                                    </li>
                                })
                            :
                            null
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Catalog;