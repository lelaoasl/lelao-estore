import React from 'react';

import './signinandsignout.styles.scss';

import SignIn from '../../components/signin/signin.component';

import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;
