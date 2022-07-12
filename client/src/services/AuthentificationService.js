import Api from '@/services/Api';

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register ({
//     email: 'oussama.fajraoui1@gmail.com',
//     password: '123456'
// })