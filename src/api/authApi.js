import instance from './interceptor';

const authApi = {
    // signup: (params) => instance.post('auth/signup', params),
    // login: (params) => instance.post('auth/login', params),
    // posts: () => instance.get('todos'),
    // verifyToken: () => instance.post('auth/verify-token'),
    loginOTP: (params) =>
        instance.post('login', {
            action: 'login',
            ...params,
        }),
};

export default authApi;
