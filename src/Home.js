import React from 'react';
import SubscribeOurChannel from './SubscribeOurChannel/SubscribeOurChannel';
import './SubscribeOurChannel/subscribe-our-channel.scss';
import GetComment from './GetComment';
import SomeContent from './SomeContent';
import FormSerge from './FormSerge/FormSerge';

class Home extends React.Component {

    render() {
        return(
            <div>
                <header className="App-header">
                    <SomeContent />
                    <SubscribeOurChannel />

                </header>
                <main>
                    <GetComment />
                    <FormSerge />
                </main>
            </div>
        )
    }
}

export default Home;