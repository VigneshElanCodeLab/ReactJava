class  AuthService{
registerUser(username,password){
 sessionStorage.setItem('AuthenticatedUser',username)
 console.log("registerUser")
}
logout(){
    sessionStorage.removeItem('AuthenticatedUser')
    
}
isUserLoggedIn(){
  let user = sessionStorage.getItem('AuthenticatedUser')
  console.log(user);
    if(user===null) return false
    return true
}
}
export default new AuthService()