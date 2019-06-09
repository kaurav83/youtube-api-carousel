import React from 'react';
import SubscribeOurChannel from './SubscribeOurChannel/SubscribeOurChannel';
import './SubscribeOurChannel/subscribe-our-channel.scss';
import GetComment from './GetComment';
import SomeContent from './SomeContent';
import FormSerge from './FormSerge/FormSerge';
import BottomBasket from './BottomBasket/BottomBasket';
import FormFirstStap from './Checkout/FormFirstStap';

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
                    <BottomBasket />
                    <FormFirstStap />
                </main>
            </div>
        )
    }
}

export default Home;