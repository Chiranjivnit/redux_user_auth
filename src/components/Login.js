import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sucessAuth, failAuth } from './Redux/actions/AuthActionCreater';
import { user } from './UserDb';

function Login(props) {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [paswrd, setPaswrd] = useState('');

    const validateUser = (e) => {
        e.preventDefault();
        const userList = JSON.parse(JSON.stringify(user))
        const validUser = {
            username: "hruday@gmail.com",
            password: 'hruday123'
        }
        if (email === validUser.username && paswrd === validUser.password) {
            dispatch(sucessAuth(userList));
            return props.history.push("/app");
        } else {
            dispatch(failAuth('invalid User'));
            return props.history.push("/");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box" />
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                     <div className="col-lg-12 login-title">
                        ADMIN PANEL
                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input value={paswrd} onChange={(e) => setPaswrd(e.target.value)} type="password" className="form-control" i />
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">

                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button onClick={(e) => { validateUser(e) }} type="submit" className="btn btn-outline-primary">LOGIN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </>
    )
}
export default Login;