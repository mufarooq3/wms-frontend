import Repository from './Repository';

const resource = "/auth";
export default{
    authenticate(payload){
        return Repository.post(`${resource}/login`,payload, {headers: payload})
    },

    setToken(token){
        window.localStorage.setItem("token", token);
    },

    getToken(){
        return window.localStorage.getItem("token");
    },

    setUser(user){
        window.localStorage.setItem("user", user);
    }
}