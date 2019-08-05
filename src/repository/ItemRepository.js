import Repository from './Repository';

const resource = "/item";
export default {
    get(id) {
        return Repository.get(`${resource}/get?id=${id}`);
    },

    list() {
        return Repository.get(`${resource}/list`);
    },

    create(payload){
        return Repository.post(`${resource}/create`, payload);
    },

    delete(id){
        return Repository.delete(`${resource}/delete?id=${id}`);
    }
}