import "es6-promise/auto"
import axios from 'axios'
import qs from 'qs' ;
console.log(qs, 'QS')
export default class ApiAction
{
    constructor() {
        // this.headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'pragma': 'no-cache',
        //     'cache-control': 'no-cache'
        // }
    }



    /**
     * @param data
     *
     * {
     *   email: mail@email.com
     *   name: Ura
     *   message: Как  у вас сделать заказ
     * }
     * */
    createFeedback = (data) =>
    {
        return axios({
            method: 'POST',
            url: `/rapi/feedback/create-feedback`,
            data: qs.stringify(data)
        })
          .then(response => response.data)
          .catch(err => {
              throw new Error(err)
          })
    };
}
