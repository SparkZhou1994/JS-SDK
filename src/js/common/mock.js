import FetchMock from 'fetch-mock'

FetchMock.mock('/login', (url, opts) => {
    const params = opts.params;
    if (params.account === '123') {
        if (params.password === '123') {
            return { code: 200, message: 'success' };
        } else {
            return { code: 401, message: '密码错误' };
        }
    } else {
        return { code: 400, message: '用户名错误' };
    }
})