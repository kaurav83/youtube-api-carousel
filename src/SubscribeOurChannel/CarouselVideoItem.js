import React, {Component} from 'react';

class CarouselVideoItem extends Component {

  state = {
    startVideo: false,
    isCurrentItem: false
  }

  handleCLickMiniature(e) {

    if (e.target) {
      this.setState({
        isCurrentItem: e.target.getAttribute("data-item")
      }, () => this.props.goToSlide(this.props.index, this.state.isCurrentItem, this.props.slide.description))
    }

    // if (this.props.element.src.indexOf(e.target.getAttribute("data-item")) !== -1) {
    //   this.props.element.src += "&autoplay=1";
    //   e.preventDefault();
    // }
  }



  render() {
    return (
      <li
        className={
          this.props.index === this.props.activeIndex ?
            "subscribe-channel__item-video subscribe-channel__item-video--active"
            :
            "subscribe-channel__item-video"
        }
      >
        <div className="subscribe-channel__wrapper-miniature">
          <img
            src={this.props.slide.poster}
            alt="miniature"
            className="subscribe-channel__miniature"
            data-item={this.props.slide.token}
            onClick={this.handleCLickMiniature.bind(this)}
          />
          <div className={
            this.props.index === this.props.activeIndex ? "subscribe-channel__play-icon subscribe-channel__play-icon--active" : "subscribe-channel__play-icon"
          }>
            <button className="subscribe-channel__play-icon-btn"></button>
          </div>
        </div>
        <p className="subscribe-channel__description">{this.props.slide.description}</p>
      </li>
    )
  }
}

export default CarouselVideoItem;
