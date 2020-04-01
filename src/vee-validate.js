import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import { configure } from 'vee-validate'

configure({
    classes: {
        valid: 'valid',
        invalid: 'is-invalid'
    }
})
localize('zh_TW', TW)
extend('required', {
    ...required,
    message: '請輸入email'
});
extend("email", {
    ...email,
    message: "請輸入正確的email正確格式"
});
extend('required', value => {
    if (value) {
        return true;
    }
    return '請輸入{_field_}';
});