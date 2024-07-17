// import formCheck from "../common/form-check";
import { $ } from '../common/utils'
import { fetchPost } from '../common/fetch';
import { check } from '../common/form-check'
// export default () => {
//     const btn = document.getElementById('submit');
//     const input = document.getElementById('input');
//     const check = formCheck(document.getElementById('form'));

//     btn.onclick = () => {
//         check();
//         alert('1111')
//     }

//     input.oninput = () => {
//         check();
//     }
// }

export default (opts = {}) => {
    const $loginForm = $('login-form');
    const $remember = $('login-remember');
    const $clearAccount = $('clear-account');
    const $account = $('login-account');
    const $password = $('login-password');
    const $error = $('login-error');
    
    $loginForm.onsubmit = async (e) => {
        // 防止链接打开 URL 或者 防止复选框的默认操作
        e.preventDefault(e)

        const checkResults = check($loginForm);
        if (!checkResults.length) {
            let remember = '0';
            if ($remember.getAttibute('checked')) {
                remember = '1';
            }
    
            const data = await fetchPost('/login', {
                account: $account.value,
                password: $password.value,
                remember: remember
            });
    
            if (data.coe === 200) {
                opts.success && opts.success();
            } else {
                $error.innereHTML = data.message
            }
        } else {
            const name = checkResults[0].name;
            const type = checkResults[0].type;
            if (type === 'present') {
                if (name === 'account') {
                    $error.innerHTML = '请填写您的用户名'
                }
                if (name === 'password') {
                    $error.innerHTML = '请填写您的密码'
                }
            }
        }
    }

    $account.oninput = () => {
        if ($account.value.length)  {
            $clearAccount.style.display = 'block';
        } else {
            $clearAccount.style.display = 'none';
        }
        $error.innerHTML = '';
    }
    
    $clearAccount.onclick = () => {
        $account.value = '';
        $clearAccount.style.display = 'none';
    }

    $password.oninput = () => {
        $error.innerHTML = '';
    }
}











