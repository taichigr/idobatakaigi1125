import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';
console.log({config});

export default () => {
  const [name, setName] = useState('');
  if(config.signInEnabled === true && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
