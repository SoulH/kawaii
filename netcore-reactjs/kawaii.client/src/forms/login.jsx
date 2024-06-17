import { useState } from 'react';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import FormInput from '../components/form-input';
import './login.css';


const LoginForm = ({model, style, className}) => {
    const [email, setEmail] = useState((model || {}).email || '');
    const [password, setPassword] = useState('');

    const updateEmail = (e) => setEmail(e.currentTarget.value);
    const updatePassword = (e) => setPassword(e.currentTarget.value);

    return (
        <div className='login-form-wrapper'>
            <div className='login-form'>
                <FormInput title='Email' type='email' icon={faUser} onChange={updateEmail}/>
                <FormInput title='Password' type='password' icon={faKey} onChange={updatePassword}/>
                <div></div><div></div>
                <Button variant="warning"><strong>PROCEED</strong></Button>
            </div>
        </div>);
};

export default LoginForm;