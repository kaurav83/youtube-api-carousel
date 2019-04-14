import React, {Component} from 'react';

class CarouselVideoSlide extends Component {
  player;

  constructor() {
    super();
    // this.init();
    this.state = {
      // strSearch: "",
      cssSelectorBg: ""
    };
  }

  componentDidMount() {
    // if (this.playerAnchor.classList.contains("subscribe-channel__video--active")) {
    //   let elem = this.playerAnchor.querySelector("iframe");
    //   elem.src += "&autoplay=1"
    // }


    // let link = new URL(this.props.slide.link);
    // let locationSearch = link.search;
    // let pointStr = locationSearch.substr(3, locationSearch.length - 3);
    // this.setState({
    //   strSearch: pointStr
    // })
    // this.video = this.props.slide.token;
    // if (this.iframe.src.indexOf('sZdTmRRT4Uc') !== -1) {
    //   window.onYouTubeIframeAPIReady = (e) => {
    //     this.YT = window['YT'];
    //     this.player = new window['YT'].Player(this.iframe, {
    //       videoId: this.video,
    //       events: {
    //         'onStateChange': this.onPlayerStateChange.bind(this),
    //         'onReady': this.onPlayerReady.bind(this)
    //       }
    //     })
    //   }
    // }

    if (this.iframe.src.indexOf('sZdTmRRT4Uc') === -1) {
      this.wrapperBtn.style.display = "none";
    }
  }

  // init() {
  //   const tag = document.createElement('script');
  //   tag.src = 'https://www.youtube.com/iframe_api';
  //   const firstScriptTag = document.getElementsByTagName('script')[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  // }

  onPlayerReady(e) {
      // e.target.playVideo();

    this.setState({
      cssSelectorBg: "subscribe-channel__before-start"
    })
  }

  onPlayerStateChange = (event) => {
    let minusOne = -1;
    switch(event.data) {
      case window['YT'].PlayerState.PLAYING :
        console.log("datat")
        this.setState({
          cssSelectorBg: ""
        })
        this.bg.classList.remove("subscribe-channel__bg-active");
        this.wrapperBtn.classList.add('subscribe-channel__remove-btn');
        break;

      case window['YT'].PlayerState.ENDED :
        console.log(this.bg, 'BG')
        this.playerAnchor.classList.add('subscribe-channel__shown');
        this.bg.classList.add("subscribe-channel__bg-active");
        break;

      default:
        console.log("DEFAULT PLAYERCH");
    }

    // if (event.data === YT.PlayerState.PAUSED) {
    //     document.getElementById("playerWrap").classList.add("before-start");

    // }
  }

  handlePlayAnchor() {
    this.player.seekTo(0);
    this.playerAnchor.classList.remove('subscribe-channel__shown');
  }

  giveElement(e) {
    this.props.getElementIframe(e.target);
  }

  // handleGetActiveBlock = (e) => {
  //   // console.log(this.playerAnchor, 'TARGET')
  //   if (this.playerAnchor.classList.contains("subscribe-channel__video")) {
  //     this.props.getElementIframe(this.playerAnchor.classList.contains("subscribe-channel__video"));
  //   } else {
  //     console.log('no element')
  //   }
  //
  // }

  render() {
    // console.log(this.state.cssSelectorBg, 'css')
    // ${this.iframe && this.iframe.src.indexOf("sZdTmRRT4Uc") ? `${this.state.cssSelectorBg}` : null}
    return (
      <div
        className={
          this.props.index === this.props.activeIndex ?
            `subscribe-channel__video subscribe-channel__video--active ${this.state.cssSelectorBg}`
            :
            "subscribe-channel__video"
        }
        ref={el => this.playerAnchor = el}
        onClick={this.handlePlayAnchor.bind(this)}
      >
        <div
          className="subscribe-channel__bg"
          ref={el => this.bg = el}
        />
        <iframe
          className="subscribe-channel__iframe"
          width="560"
          height="315"
          src={this.props.slide.link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ref={el => this.iframe = el}
          onLoad={this.giveElement.bind(this)}
        />
        <div className="subscribe-channel__play-bg" ref={el => this.wrapperBtn = el}>
          <button
            className="subscribe-channel__play-btn play"
            ref={el => this.button = el}
          />
        </div>
      </div>
    )
  }
}

export default CarouselVideoSlide;
