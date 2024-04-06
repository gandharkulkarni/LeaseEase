import Cookies from 'js-cookie';

class AuthService {

  setSession(token) {
    Cookies.set('jwt', token);
  }

  logout() {
    Cookies.remove('jwt');
  }

  getToken() {
    return Cookies.get('jwt');
  }
  
  isAuthenticated() {
    return (Cookies.get('jwt') !== null && Cookies.get('jwt') !== undefined)
  }
}

//Singleton
const authHandler = new AuthService();
export default authHandler;
