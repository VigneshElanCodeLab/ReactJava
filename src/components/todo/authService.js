import Axios from 'axios'
class AuthService {

    basicAuthService(username, password) {
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        return Axios.get('http://localhost:8081/basicauth', {
            headers: {
                authorization: basicAuthHeader
            }
        })
    }
    registerUser(username, password) {

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        sessionStorage.setItem('AuthenticatedUser', username)
        console.log("registerUser")
        this.useAxiosInterceptors(basicAuthHeader)
    }
    logout() {
        sessionStorage.removeItem('AuthenticatedUser')

    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('AuthenticatedUser')
        console.log(user, 'getusername');
        if (user === null) return false
        return true
    }
    getUserLoggedInUserName() {
        let user = sessionStorage.getItem('AuthenticatedUser')
        console.log(user);
        if (user === null) return null
        return user
    }
    useAxiosInterceptors(basicAuthHeader) {
        // let username='vignesh'
        // let password='learning'
        // let basicAuthHeader='Basic ' + window.btoa(username + ":" + password);
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }

        )
    }
}
export default new AuthService()