import React, {Component} from 'react';

class YTPlayer extends Component {
    constructor() {
        super();
        this.init();
    }

    state = {
        strSearch: "",
    };

    init() {
        let tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    componentDidMount() {
        let pointStr = "";
        if (this.props.videoLink !== null && this.props.videoLink.length !== 0) {
            let link = new URL(this.props.videoLink);
            let locationSearch = link.search;
            pointStr = locationSearch.substr(3, locationSearch.length - 3);
            this.setState({
                strSearch: pointStr
            })
        } else {
            return null;
        }
        console.log(pointStr)
        window.onYouTubeIframeAPIReady = (e) => {
            return new window['YT'].Player(this.iframe, {
                videoId: pointStr,
                height: 700,
                width: 900,
                playerVars: {
                    'controls' : 0,
                    'modestbranding' : 1,
                    'rel' : 0,
                    'showinfo' : 0,
                    'info': 0,
                    'wmode': 'transparent'
                },
                events: {
                    'onReady': this.onPlayerReady.bind(this),
                    'onStateChange': this.onPlayerStateChange.bind(this)
                }
            })
        }

    }

    onPlayerReady(e) {
        // this.props.imageElement ? this.props.imageElement.addEventListener("load", function(event) {
        //     console.log(event.target.height, 'img')
        //     this.setState({
        //         heightPlayer: event.target.height
        //     })
        //     e.target.height = event.target.height + "px";
        // }) : null
    }

    onPlayerStateChange(e) {
        switch(e.data) {
            case window['YT'].PlayerState.PLAYING :
            // this.setState({
            //     cssSelectorDrapePause: ""
            // })
            break;
            case window['YT'].PlayerState.PAUSED :
                // this.setState({
                //     cssSelectorDrapePause: "backstage__drape-pause"
                // })
            break;
            case window['YT'].PlayerState.ENDED :
                e.target.stopVideo();
            break;
        }
    }

    render() {console.log(this.props.videoLink)
        return (
            <React.Fragment>
                <div className="backstage__wrapper-video" ref={el => this.wrapperIframe = el}>
                    <div
                        className="backstage__youtube-iframe"
                        id={this.state.strSearch}
                        ref={el => this.iframe = el}
                        // style={this.props.heightImg !== 0 ? {height: this.props.heightImg} : null}
                    />
                    <div
                        // className={this.state.cssSelectorDrapePause.length !== 0 ?
                        //     this.state.cssSelectorDrapePause
                        //     :
                        //     ""
                        // }
                        // onClick={this.handlePauseElement}
                    />
                </div>
                <p style={{color: "seagreen"}}>{this.props.body}</p>
            </React.Fragment>
        )
    }
}

export default YTPlayer;
