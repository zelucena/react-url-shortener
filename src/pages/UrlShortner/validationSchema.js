import * as yup from 'yup';
import urlRegex from 'url-regex';

export default yup.object().shape({
    long: yup
        .string()
        .lowercase()
        .trim()
        .test('url-regex', 'Must be a valid URL', long => {
            return urlRegex({ exact: true, strict: false }).test(long);
        })
        .required('This is required'),
    short: yup.string().trim().max('10', 'Max 10 characters allowed'),
});