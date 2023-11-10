import React, {useState} from 'react';
import AppHeader from '../components/AppHeader';
import AuthSection from '../components/AuthSection';

const LoginScreen = () => {
  const [loginData, setLoginData] = useState({email: '', password: ''});

  return (
    <>
      <AppHeader />
      <AuthSection data={loginData} setData={setLoginData} type="login" />
    </>
  );
};

export default LoginScreen;
