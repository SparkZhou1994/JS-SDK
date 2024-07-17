import { $ } from '../common/utils';

// export default (container) => {
//     const tpl = `<form id="form">
//     <input id="input" name="uname" type="text" />
//     <input name="password" type="password" />
//     <input value="login" id="submit" type="submit" />
//     </form>`;
//     container.innerHTML = tpl;
// }

const template = (opts = {}) => {
    const autocompleteTpl = `
        <div id="no-autocomplete">
            <input type="text">
            <input type="password">
        </div>
    `;

    const autocompleteAdapter = opts.autocomplete ? '' : 
    autocompleteTpl;

    const autocompleteValue = opts.autocomplete ? 'on' :
    'off'

    const tpl = `
        <div id="login-wrapper">
            <form id="login-form" onsubmit="return false">
                ${ autocompleteAdapter }
                <label class="login-account-wrapper">
                    <span class="account-label">${ opts.accountLabel }</span>
                    <input id="login-account" name="account" 
                    type="text" placeholder="${ opts.accountPlaceholder }"
                    autocomplete="${ autocompleteValue }" valid="present">
                    <span id="clear-account" class="del">
                </label>

            <label class="login-account-wrapper">
                <span class="account-label">${ opts.passwordLabel }</span>
                <input id="login-password" name="password" 
                type="password" placeholder="${ opts.passwordPlaceholder }"
                autocomplete="${ autocompleteValue }" valid="present">
            </label>

            <label class="login-remember-wrapper" 
                style="display: ${ showRemember }">
                <span>记住密码: </span>
                <input id="login-remember" name="remember" 
                type="checkbox">
            </label>

            <input id="login-btn" class="login-btn"
             type="submit" value="${ opts.loginBtnText }" />

            <div class="login-extra-wrapper">
                <a href="forget.html">忘记密码</a>
                <a href="register-mobile.html">免费注册</a>
            </div>
            </form>
        </div>
    `
    return tpl;
}
export default (conf = {}) {
    confirm.container.innerHTML = template(conf);
    const $noAutocomplete = $('no-autocomplete');
    if ($noAutocomplete) {
        $noAutocomplete.style.opacity = '0';
        $noAutocomplete.style.height = '0';
    }
}