import * as axios from "axios";


export const samuraiAPI = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '0e5c6193-92d9-43fa-8815-9bba27fab0ab'
    }
})

const apiService = {
    getUsers(pageSize, pageNumber) {
        return samuraiAPI.get(`/users?page=${pageNumber}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    follow(userId) {
        return samuraiAPI.post('/follow/' + userId).then(response => {
            return response.data;
        })
    },

    unfollow(userId) {
        return samuraiAPI.delete('/follow/' + userId)
    },

    getProfileFull(userId) {
        return samuraiAPI.get('/profile/' + userId).then(response => {
            return response.data;
        })
    },

    login(email, password, rememberMe, captcha) {
        return samuraiAPI.post('auth/login', {email, password, captcha, rememberMe}).then(response => {
            return response.data;
        })
    },
    logOut() {
        return samuraiAPI.post('auth/logout').then(response => {
            return response.data;
        })
    },
    getCaptcha() {
        return samuraiAPI.get('security/get-captcha-url').then(response => {
            return response.data;
        })
    },
    getAuthMe() {
        return samuraiAPI.get('auth/me').then(response => {
            return response.data;
        })
    },

    putStatus(status) {
        return samuraiAPI.put('profile/status', {status}).then(response => {
            return response.data;
        })
    },


    putProfile(profile) {
        return samuraiAPI.put('profile/', profile ).then(response => {
            return response.data;
        })
    },

    getStatus(userId) {
        return samuraiAPI.get('profile/status/' + userId).then(response => {
            return response.data;
        })
    },

    putPhotos(formData) {
        return samuraiAPI.put('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => console.log(response.data))
    }

}

export default apiService;



