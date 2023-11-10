import React, {useState} from 'react';
import AppHeader from '../components/AppHeader';
import AuthSection from '../components/AuthSection';

const RegisterScreen = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <>
      <AppHeader />
      <AuthSection
        data={registerData}
        setData={setRegisterData}
        type="register"
      />
    </>
  );
};

export default RegisterScreen;
