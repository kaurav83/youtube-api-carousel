import React, {Component, Fragment} from 'react';

class FormSecondStep extends Component {
    state = {
        selectedOption: ""
      }
    
      handleOptionChange = (e) => {
        this.setState({
          selectedOption: e.target.value
        })
      }

    render() {
        return (
            <Fragment>
                <span className="container-purchase__delivery-method">Способ доставки</span>
                <div className="container-purchase__delivery-form-wrapper">
                    <div className="right-grid-item__radio-container container-purchase__radio-container">
                        <label className="right-grid-item__radio-label">
                            <input
                                className="right-grid-item__radio"
                                type="radio"
                                value="nova-pochta"
                                checked={this.state.selectedOption === "nova-pochta"}
                                onChange={this.handleOptionChange}
                            />
                            <span className="right-grid-item__radio-custom" />
                            <span className="right-grid-item__label">Новая почта</span>
                        </label>
                        <span className="container-purchase__delivery-cost">Бесплатно</span>
                        <span className="container-purchase__delivery-term">3-5 дней</span>
                        <div className="container-purchase__tooltip-container">
                            <span className="container-purchase__tooltip-hidden-content">
                                {/* Проверьте правильно ли указан ваш Город. */}
                                I
                            </span>
                            <span className="container-purchase__tooltip" />
                        </div>
                    </div>
                    <div className="right-grid-item__radio-container container-purchase__radio-container">
                        <label className="right-grid-item__radio-label">
                            <input
                                className="right-grid-item__radio"
                                type="radio"
                                value="ukrpochta"
                                checked={this.state.selectedOption === "ukrpochta"}
                                onChange={this.handleOptionChange}
                            />
                            <span className="right-grid-item__radio-custom" />
                            <span className="right-grid-item__label">Укрпочта</span>
                        </label>
                        <span className="container-purchase__delivery-cost">Бесплатно</span>
                        <span className="container-purchase__delivery-term">3-5 дней</span>
                        <div className="container-purchase__tooltip-container">
                            <span className="container-purchase__tooltip-hidden-content">
                                I
                                {/* Проверьте правильно ли указан ваш Город. */}
                            </span>
                            <span className="container-purchase__tooltip" />
                        </div>
                    </div>
                    <div className="right-grid-item__radio-container container-purchase__radio-container">
                        <label className="right-grid-item__radio-label">
                            <input
                                className="right-grid-item__radio"
                                type="radio"
                                value="curer-kiev"
                                checked={this.state.selectedOption === "curer-kiev"}
                                onChange={this.handleOptionChange}
                            />
                            <span className="right-grid-item__radio-custom" />
                            <span className="right-grid-item__label">Курьером по Киеву</span>
                        </label>
                        <span className="container-purchase__delivery-cost">75 ГРН</span>
                        <span className="container-purchase__delivery-term">1-2 дня</span>
                        <div className="container-purchase__tooltip-container">
                            <span className="container-purchase__tooltip-hidden-content">
                                I
                                {/* Проверьте правильно ли указан ваш Город. */}
                            </span>
                            <span className="container-purchase__tooltip" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormSecondStep;