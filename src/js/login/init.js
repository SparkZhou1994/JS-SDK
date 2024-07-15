import '../common/polyfill';
import render from './render'
import event from './event'

window.login = (opts) => {
    const container = opts.container;
    render(container);
    event();
}

const login = (opts = {}) => {
    const defaultOpts = {
        loginBtnText: 'login in'
    };
    // 如果用户有值时用用户的，否则使用默认值
    const options = Object.assign(defaultOpts, opts);
}