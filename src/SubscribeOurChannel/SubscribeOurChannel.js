import React, {Component} from 'react';
import CarouselVideo from './CarouselVideo';
// import './style.css';

const carouselSlidersData = [
  {
    id: 0,
    link: "https://www.youtube.com/embed/sZdTmRRT4Uc?enablejsapi=1",
    token: "sZdTmRRT4Uc",
    poster: "https://img.youtube.com/vi/sZdTmRRT4Uc/0.jpg",
    description: "ТОП 5 ОБРАЗОВ ПОД ЛЮБОЕ НАСТРОЕНИЕ ОТ GEPUR.COM",
    playerId: "ytplaer1",
  },
  {
    id: 1,
    link: "https://www.youtube.com/embed/EKELndXjQDk?enablejsapi=1",
    token: "EKELndXjQDk",
    poster: "https://img.youtube.com/vi/EKELndXjQDk/0.jpg",
    description: "Sadovskaya for Gepur",
    playerId: "ytplaer2",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/zTsNPW_d2Ko?enablejsapi=1",
    token: "zTsNPW_d2Ko",
    poster: "https://img.youtube.com/vi/zTsNPW_d2Ko/0.jpg",
    description: "1 миллион подписчиков в Instagram",
    playerId: "ytplaer3",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/QWpR_EkVf4s?enablejsapi=1",
    token: "QWpR_EkVf4s",
    poster: "https://img.youtube.com/vi/QWpR_EkVf4s/0.jpg",
    description: "Замуж за Шишкову?",
    playerId: "ytplaer4",
  }
]

class SubscribeOurChannel extends Component {

  render() {
    return (
      <section className="subscribe-channel">
        <div className="subscribe-channel__title-block">
          <h2 className="subscribe-channel__main-title">GEPUR VIDEO</h2>
          <p className="subscribe-channel__title-description">Подписывайся на наш Youtube канал</p>
        </div>
        <CarouselVideo
          carouselSlidersData={carouselSlidersData}
        />
      </section>
    )
  }
}

export default SubscribeOurChannel;
