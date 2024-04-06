import { Button } from 'react-daisyui'
import EmailIcon from '../static/svg/emailIcon'
import PasswordIcon from '../static/svg/passwordIcon'
import { useState } from 'react';
import axios from 'axios';
import { API_HOST, SIGNIN } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({auth}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    let navigate = useNavigate();
    const handleSubmit = async () =>{
        setError(null);
        if(email===''){
            setError('Email id can not be empty');
            return;
        }
        if(password===''){
            setError('Password can not be empty');
            return;
        }
        
        const response = await axios.post(API_HOST+SIGNIN,{
            email: email,
            password: password
        });
        if(response?.result){
            let token = response?.result?.token;
            auth.setSession(token);
        } else{
            setError('Login failed. Check your credentials again');
        }
        
        if(error==null || auth.isAuthenticated()){
            navigate('/home');
        }

    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {error && (
            <div role="alert" className="alert alert-error w-1/3 mb-5">
                <span>Error! {error}</span>
            </div>
            )}
            <label className="input input-bordered flex items-center gap-2 mb-5 w-1/3">
                <EmailIcon />
                <input type="text" className="grow" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-5 w-1/3">
                <PasswordIcon />
                <input type="password" className="grow" onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <Button className="btn btn-active btn-success w-1/3 text-white" onClick={handleSubmit}>Login</Button>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;