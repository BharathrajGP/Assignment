import Axios from "axios";
const Urls = require('./DybamicUrls');

export const userLogin = (payload) => {
    console.log("userLogin", payload);
    return new Promise((resolve, reject) => {
        Axios.post(
            Urls.apiUrl.login,
            payload ,
            // { headers: { Authorization: sessionStorage.getItem('user_jwt') } }
        )
            .then((response) => {
                console.log("response",response.data[0].userType);
                sessionStorage.setItem("sessionToken" , response.data[0].jwt)
                sessionStorage.setItem("userName" , response.data[0].userName)
                resolve(response.data);
            })
            .catch((error) => {
                console.log("apihelper  Error" , error);
                resolve({ Error: error });
            })
        })
    };

export const OtpVerification = (payload) => {
    console.log("OTP Verification" , payload);
    return new Promise((resolve, reject) => {
        

        Axios.post(Urls.apiUrl.authentication, payload)

            .then((response) => {
                console.log("------apihelper------")
                console.log("response",response.data[0]);
                // sessionStorage.setItem("sessionToken" , response.data[0].jwt)
                // sessionStorage.setItem("userName" , response.data[0].userName)
                console.log(sessionStorage.getItem('userName')===response.data[0].userName)
                 
                resolve(response.data);

            })

            .catch((error) => {
                console.log("apihelper  Error" , error);
                resolve({ Error: error });

            })
        })
};