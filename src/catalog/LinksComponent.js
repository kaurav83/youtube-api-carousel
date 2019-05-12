import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class LinksComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                        {/* <Link to="/catalog/">Card of good</Link> */}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default withRouter(LinksComponent);