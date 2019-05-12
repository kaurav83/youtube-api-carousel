import React, {PureComponent } from 'react';
import dataVideo from '../db.json';
import YTPlayer from './YTPlayer';

class Card extends PureComponent  {
    state = {
        product: {}
    }
    // componentDidMount() {
    //     this.setState({
    //         product: dataVideo.find(item => console.log(item.id === this.props.match.params._id))
    //     })
    // }

    render() { 
        const product = dataVideo.find(item => item.id === +this.props.match.params._id);
        
        return(
            <div>
                <p>Params id: {this.props.match.params._id}</p>
                <div>{product.title}</div>

                <YTPlayer body={product.body} videoLink={product.youtube}/>
            </div>
        )
    }
}

export default Card;