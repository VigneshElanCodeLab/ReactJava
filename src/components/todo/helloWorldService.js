import axios from 'axios'

class HelloworldService {
    executeHelloworldService(name){
        let username='vignesh'
        let password='learning'
        let basicAuthHeader='Basic ' + window.btoa(username + ":" + password);
        console.log('executed')
      return  axios.get(`http://localhost:8081/hellomessage/${name}`,{
          headers:{
              authorization:basicAuthHeader
          }
      });
    }
}

export default new HelloworldService()