import React, {Fragment} from 'react';
import { relative } from 'path';
// import ApiAction from 'fetcher/api-action';


class ContactsTab extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    state = {
        username: "",
        email: "",
        message: "",
        notificationEmail: false,
        notificationName: false,
        notificationMessage: false,
        disappearForm: null,
        animationCssForm: ""
    }

    handleInputField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendForm = (e, email, name, message) =>
    {
        e.preventDefault();
        console.log(email, name, message)
        if (email.length === 0) {
            this.setState({
                notificationEmail: true
            })
        } else {
            this.setState({
                notificationEmail: false
            })
        } 
        if (name.length === 0) {
            this.setState({
                notificationName: true
            })
        } else {
            this.setState({
                notificationName: false
            })
        }
        if (message.length === 0) {
            this.setState({
                notificationMessage: true
            })
        } else {
            this.setState({
                notificationMessage: false
            })
        }

        if (email.length !== 0 && name.length !== 0 && message.length !== 0) {
            // (new ApiAction()).createFeedback({email: email, name: name, message: message })
            //   .then(result => {
            //       //закрытие формы
            //   });

            this.setState({
                disappearForm: true
            })
        }

    };

    handleReturnForm = (e) => {
        if (e.target) {
            this.setState({
                disappearForm: false,
                animationCssForm: "form-common-help__wrapper--animate"
            })
        }
    }
 
    render() {
        return (
            <div 
                className="tabsinfo contacts-wrapper contacts active"
                style={{
                    display: "flex", 
                    justifyContent: "space-around",
                    position: "relative"
                }}    
            >
                <div className="contacts-left-column">

                    <div className="contacts-anounce-block">
                        <p className="contacts-anounce">Контакты</p>
                    </div>

                    <div className="contacts-hotline">
                        <p>Бесплатная горячая линия:</p>
                        <p>0 800 208-832</p>
                    </div>

                    <div className="contacts-telephone">
                        <p className="contacts-operators">Мобильные операторы</p>
                        <p className="contacts-tel-vodaphone">+380 (50) 377-50-77 </p>
                        <p className="contacts-tel-kyivstar">+380 (67) 370-50-77 </p>
                        <p className="contacts-tel-life">+380 (73) 735 88 32</p>
                        <p className="contacts-extra">По тарифам оператора</p>
                    </div>

                    {/**    <div class="contacts-viber">*/}
                    {/**      <p class="viber-title">Viber SMS</p>*/}
                    {/**      <span>+380 (96) 757-81-90</span>*/}
                    {/**    </div>*/}

                    <div className="contacts-mail">
                        <p>Наш email:</p>
                        <p><a href="mailto:gepur@gepur.com">gepur@gepur.com</a></p>
                    </div>

                    <div className="contacts-hours">
                        <p>График работы контакт-центра: </p>
                        <p>Пн - Вс с 8:00-21:00</p>
                    </div>

                    <div className="contacts-shop">
                        <p>Наш магазин:</p>
                        <p>Киев, ТРЦ Lavina Mall, ул. Берковецкая 6</p>
                        <p>График работы: с 10-00 до 22-00</p>
                        <p>тел. +380633929862</p>

                    </div>


                </div>
                {/** left column end */}

                <div 
                    className="contacts-right-column"
                    style={{minWidth: "340px"}}    
                >
                    <div className="form-common-help">
                        <div className={this.state.disappearForm === null ? 
                            "form-common-help__after-success-submit" 
                            : 
                            "form-common-help__after-success-submit form-common-help__after-success-submit--active"}
                        >
                            <span className="form-common-help__miniature" />
                            <span className="form-common-help__message-sending">Сообщение отправлено</span>
                            <span className="form-common-help__write-more" onClick={this.handleReturnForm}>Написать еще</span>
                        </div>
                        <div className={this.state.disappearForm === null ?
                            `form-common-help__wrapper ${this.state.disappearForm === false ? this.state.animationCssForm : null}`
                            :
                            `${this.state.disappearForm === true ? "form-common-help__wrapper form-common-help__wrapper--active" : null} `}
                        >
                            <div className="form-common-help__title">Напишите нам</div>
                            <div className="form-common-help__wrap-form">
                                <form onSubmit={(e) => this.sendForm(e, this.state.email, this.state.username, this.state.message)}>
                                    <div className="form-common-help__group">
                                        <label className="form-common-help__label" htmlFor="feedback-name">Имя</label>
                                        <input
                                        type="text"
                                        id="feedback-name"
                                        className="form-common-help__input-field"
                                        name="username"
                                        placeholder="Как вас зовут?"
                                        value={this.state.username}
                                        onChange={this.handleInputField}
                                        />
                                        {
                                            this.state.notificationName === true ?
                                            <small className="form-common-help__small-text">
                                                Необходимо заполнить «Имя»
                                            </small>
                                            :
                                            null
                                        }

                                    </div>
                                    <div className="form-common-help__group">
                                        <label className="form-common-help__label" htmlFor="feedback-email">Email</label>
                                        <input
                                        type="email"
                                        id="feedback-email"
                                        className="form-common-help__input-field"
                                        name="email"
                                        placeholder="Ваш email"
                                        value={this.state.email}
                                        onChange={this.handleInputField}
                                        />
                                        {
                                            this.state.notificationEmail === true ?
                                            <small className="form-common-help__small-text">
                                                Необходимо заполнить «Email»
                                            </small>
                                            :
                                            null
                                        }

                                    </div>
                                    <div className="form-common-help__group">
                                        <label className="form-common-help__label" htmlFor="feedback-message">Сообщение</label>
                                        <textarea
                                        type="text"
                                        id="feedback-message"
                                        className="form-common-help__input-field form-common-help__textarea-field"
                                        name="message"
                                        placeholder="Опишите Ваш вопрос или проблему"
                                        value={this.state.message}
                                        onChange={this.handleInputField}
                                        />
                                        {
                                            this.state.notificationMessage === true ?
                                            <small className="form-common-help__small-text">
                                                Необходимо заполнить «Сообщение»
                                            </small>
                                            :
                                            null
                                        }

                                    </div>
                                    <div className="form-common-help__group form-common-help__group-checkbox">
                                        <label className="form-common-help__label form-common-help__label-checkbox" htmlFor="feedback-subscribe">
                                            <input
                                            type="checkbox"
                                            name="subscribe"
                                            id="feedback-subscribe"
                                            className="form-common-help__checkbox"
                                            />
                                            <span className="form-common-help__custom-checkbox" />
                                            <span>Подписаться на рассылку</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="form-common-help__btn">Отправить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactsTab;
