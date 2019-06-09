import React, {Component} from 'react';
import FormSecondStep from './FormSecondStep';

class FormFirstStap extends Component {

    state = {
        username: "",
        country: "",
        city: "",
        phone: "",
        email: "",
        allFieldsAreFilled: false,
      }

    handleInputField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if (this.state.username.length !== 0 &&
            this.state.country.length !== 0 &&
            this.state.city.length !== 0 &&
            this.state.phone.length !== 0 &&
            this.state.email.length !== 0) {
              this.setState({
                allFieldsAreFilled: true
              })
        }
    }

    handleSubmitData = (e) => {
        e.preventDefault(e);
    }

    render() {
        return(
            <div className="container-purchase">
                <form 
                    className="container-purchase__main-form"
                    onSubmit={this.handleSubmitData}
                >
                    <label 
                        htmlFor="FIO"
                        className="container-purchase__label"
                    >Ф. И. О.</label>
                    <input 
                        type="text"
                        className="container-purchase__input-field"
                        value={this.state.username}
                        onChange={this.handleInputField}
                        id="FIO"
                        name="username" 
                    />
                    <label 
                        htmlFor="phone-purchase" 
                        className="container-purchase__label"
                    >Телефон</label>
                    <input
                        type="tel"
                        className="container-purchase__input-field"
                        value={this.state.phone}
                        placeholder=""
                        name="phone"
                        id="phone-purchase"
                        onChange={this.handleInputField}
                    />
                    <label
                        htmlFor="email-purchase"
                        className="container-purchase__label"
                    >Email<span className="container-purchase__optional">(опционально)</span>
                    </label>
                    <input
                        type="email"
                        className="container-purchase__input-field"
                        value={this.state.email}
                        placeholder=""
                        name="email"
                        id="email-purchase"
                        onChange={this.handleInputField}
                    />
                    <label htmlFor="point-purchase" className="container-purchase__label container-purchase__label--double-field">Страна и Город</label>
                    <div className="container-purchase__input-group">
                        <input
                            type="text"
                            className="container-purchase__input-field container-purchase__input-field--country"
                            value={this.state.country}
                            placeholder=""
                            name="country"
                            id="point-purchase"
                            onChange={this.handleInputField}
                        />
                        <input
                            type="text"
                            className="container-purchase__input-field container-purchase__input-field--city"
                            value={this.state.city}
                            placeholder=""
                            name="city"
                            onChange={this.handleInputField}
                        />
                    </div>
                    
                    <div className="container-purchase__tooltip-container" style={{display: "none"}}>
                        <span className="container-purchase__tooltip-hidden-content">
                            Проверьте правильно ли указан ваш Город.
                        </span>
                        <span className="container-purchase__tooltip" />
                    </div>

                    {
                        this.state.allFieldsAreFilled === true ?
                            <FormSecondStep />
                            :
                            null
                    }
                        <button type="submit" className="container-purchase__main-submit-btn">Оформить заказ</button>
                    
                </form>

                <div className="somecontent">CONTENT SOME</div>
            </div>
        )
    }
}

export default FormFirstStap;