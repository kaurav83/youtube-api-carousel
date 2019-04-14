import React, {Component} from 'react';
import CarouselVideoItem from './CarouselVideoItem';
import NewTestComponent from './NewTestComponent';

class CarouselVideo extends Component {
  players = new Array();
  constructor() {
    super();
    this.init();
  }

  state = {
    activeIndex: 0,
    isCurrentItem: [],
    sliderData: [],
    cssSelectorBg: "",
    cssSelectorBtn: "",
    h: "",
    target: "",
    visibilePlayer: false,
    description: "",
    activePlayer: "",
    cssTransition: "",
    cssTransitionEnd: "",
    cssWithoutTransition: "",
    // cssDisplay: false,
    readyVideo: ""
  }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  componentDidMount() {
    this.props.carouselSlidersData.map(item => this.setState(prevState => ({
      sliderData: [...prevState.sliderData, item]
    })))

    window['onYouTubeIframeAPIReady'] = e => {
      this.state.sliderData.map((item, index) => {
        let curPlayer = this.createPlayer(item);
        this.players[index] = curPlayer;
      })
    }
  }

  createPlayer = (info) => {
    return new window['YT'].Player(info.playerId, {
      videoId: info.token,
      playerVars: {rel: 0, showinfo: 0, ecver: 0},
      width: 1042,
      height: 566,
      title: info.description,
      events: {
        onReady: this.onReadyHandler.bind(this),
        onStateChange: this.onPlayerStateChange.bind(this)
      }
    })
  }

  onPlayerStateChange(event) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING :
        if (event.target.h === this.state.h) {
          event.target.playVideo();
        } else if (event.target.h !== event.target.h) {
          event.target.stopVideo();
        }

        this.setState({
          cssSelectorBg: "",
          cssSelectorBtn: "",
          // cssTransition: "subscribe-channel__transition",
          // cssTransitionEnd: ""
        })

        break;
      case window['YT'].PlayerState.PAUSED:
        this.setState({
          // cssTransition: "subscribe-channel__transition",
          cssTransitionEnd: "",
          cssWithoutTransition: "subscribe-channel__main-slider-visible",
          cssTransition: ""
        })

        break;
      case window['YT'].PlayerState.ENDED :
        if (event.target.l.videoData.video_id === this.state.target) {
          event.target.playVideo();
          this.setState({
            // cssTransitionEnd: "",
            cssWithoutTransition: "",
            cssTransition: "",
          })
        } else {
          event.target.stopVideo();
          this.setState({
            cssTransitionEnd: "subscribe-channel__transition-end",
            // cssWithoutTransition: "",
            cssTransition: "",
          })
        }

        break;
    };
  };

  onReadyHandler(e) {
      this.setState({
        cssSelectorBg: "subscribe-channel__before-start",
        cssSelectorBtn: "subscribe-channel__play-bg",
        // cssTransitionEnd: "",
        // cssWithoutTransition: "",
      })

    if (e.target.l.videoData.video_id) {
      this.setState({
        readyVideo: e.target.l.videoData.video_id,
      })
    }
  }

  goToSlide(index, isCurrentItem, description) {
    // let currentIndex = 0;
    this.setState({
      activeIndex: index,
      isCurrentItem: isCurrentItem
    })

    this.players.map((item, i) => {
      if (item.l) {
        if (item.l.videoData) {
          if (item.l.videoData.video_id) {
            if (item.l.videoData.video_id === isCurrentItem) {
              item.playVideo();
              this.setState({
                h: item.h,
                visibilePlayer: true,
                description: description,
                activePlayer: item.l.videoData.video_id,
                // cssTransition: "subscribe-channel__transition",
                cssWithoutTransition: "",
                cssTransitionEnd: "",

                // cssDisplay: true
              })
              if (this.state.readyVideo === isCurrentItem) {
                this.setState({
                  cssWithoutTransition: "subscribe-channel__main-slider-visible",
                })
              }
            } else {
              item.pauseVideo();
              this.setState({
                cssTransition: "subscribe-channel__transition",
                // cssWithoutTransition: "subscribe-channel__main-slider-visible",
              })
            }
          }

        }
      }

      if (item.l) {
        if (item.l.videoData) {
          if (item.l.videoData.video_id) {
            if (item.l.videoData.video_id.match("sZdTmRRT4Uc") === isCurrentItem.match("sZdTmRRT4Uc") &&
              this.state.cssSelectorBg.length !== 0 &&
              this.state.cssSelectorBtn.length !== 0 &&
              index === this.state.activeIndex) {
              this.setState({
                cssSelectorBg: "",
                cssSelectorBtn: ""
              })
              item.playVideo();
            }
          }
        }
      }
    })
  }

  goToPrevSlide(e) {
    e.preventDefault();


    let index = this.state.activeIndex;

     this.setState({
       activeIndex: index
     });

    let width = 358; // ширина изображения
    let count = 1; // количество изображений
    let position = 0;
    position = Math.min(position + width * count, 0)
    let a =  this.list.style.marginLeft = position + "px";
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {sliderData} = this.state;

    this.setState({
      activeIndex: index
    })

    let width = 358; // ширина изображения
    let count = 1; // количество изображений
    let position = 0;
    position = Math.max(position - width * count, -width * (sliderData.length - count));
    let a =  this.list.style.marginLeft = position + "px";

  }

  handlePlayAnchor = (e) => {
    this.players.map(item => {
      if (item.l) {
        if (item.l.videoData) {
          if (item.l.videoData.video_id === 'sZdTmRRT4Uc') {
            this.setState({
              cssSelectorBg: "",
              cssSelectorBtn: "subscribe-channel__remove-btn",
            })

            item.playVideo();
          }
        }
      }
    });
  }

  handleEndVideo = (e, target) => {
    this.setState({
      target: target,
    })
  }

  render() {
    return (
      <div className="subscribe-channel__carousel">
        <React.Fragment>
          {
            this.state.sliderData ? this.state.sliderData.map((slide, index) => {
                return <NewTestComponent
                  key={slide.id}
                >
                  <div
                    className={this.state.visibilePlayer === true && this.state.activePlayer === slide.token ?
                      `${this.state.cssTransition !== "" ? this.state.cssTransition : ""}` ||
                        `${this.state.cssTransitionEnd !== "" ? this.state.cssTransitionEnd : ""}`||
                        `${this.state.cssWithoutTransition !== "" ? this.state.cssWithoutTransition : ""}`
                      :
                      `subscribe-channel__main-slider-hidden`
                    }
                    // style={this.state.visibilePlayer === true && this.state.activePlayer === slide.token ? {display: "block" } : {display: "none"}}
                  >
                    <div
                      className={slide.id === this.state.activeIndex ?
                        `subscribe-channel__video subscribe-channel__video--active
                      ${slide.token === "sZdTmRRT4Uc" ?
                          this.state.cssSelectorBg
                          :
                          ""}`
                        :
                        "subscribe-channel__video"
                      }
                      // style={
                      //   this.state.cssDisplay === true ?
                      //       {display: "inline-flex", visibility: "initial"}
                      //       :
                      //       {display: "none", visibility: "initial"}}
                      onClick={(e) => this.handlePlayAnchor(e)}
                    >
                      <div
                        onClick={(e) => this.handleEndVideo(e, slide.token)}
                      />
                      {/*{*/}
                        {/*this.players.length === 0 ?*/}
                          {/*<img*/}
                            {/*src="https://i.ibb.co/SwT70qz/Eclipse-1s-200px.gif"*/}
                            {/*className="subscribe-channel__preloader" alt="preloader"*/}
                          {/*/>*/}
                          {/*:*/}
                          {/*null*/}
                      {/*}*/}
                      <div
                        id={slide.playerId}
                      />

                      <div
                        className=
                          {slide.token === "sZdTmRRT4Uc" ?
                            this.state.cssSelectorBtn
                            :
                            "subscribe-channel__remove-btn"
                          }
                        style={this.state.visibilePlayer === true && this.state.activePlayer === slide.token ? {display: "block"} : {display: "none"}}
                      >
                        <button
                          className=
                            {
                              this.state.cssSelectorBtn.length !== 0 ?
                                "subscribe-channel__play-btn play"
                                :
                                "subscribe-channel__play-btn play subscribe-channel__play-btn-remove"
                            }
                        />
                      </div>
                    </div>
                  </div>

                </NewTestComponent>
              })
              :
              null
          }
        </React.Fragment>
        <h3 className={this.state.visibilePlayer ? "subscribe-channel__title" : "subscribe-channel__title-hidden" }>{this.state.description}</h3>
        <div className="subscribe-channel__wrapper-list-video">
          <span
            className="subscribe-channel__left-arrow"
            onClick={this.goToPrevSlide.bind(this)}
          />
          <div className="subscribe-channel__gallery">
            <ul
              className="subscribe-channel__list-video"
              ref={el => this.list = el}
            >
              {
                this.state.sliderData ? this.state.sliderData.map((slide, index) => {
                    return <CarouselVideoItem
                      key={slide.id}
                      index={slide.id}
                      activeIndex={this.state.activeIndex}
                      slide={slide}
                      isActive={this.state.activeIndex === slide.id}
                      goToSlide={this.goToSlide.bind(this)}
                    />
                  })
                  :
                  null
              }
            </ul>
          </div>
          <span
            className="subscribe-channel__right-arrow"
            onClick={this.goToNextSlide.bind(this)}
          />
        </div>

      </div>
    )
  }
}

export default CarouselVideo;
