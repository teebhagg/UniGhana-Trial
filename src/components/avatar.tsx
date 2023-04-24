import React from 'react';
import { useNavigate } from 'react-router-dom';

const Avatar = () => {

    const avatar_icon = require('./images/avatar.svg')

    const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate('/login')}} style={{ cursor:'pointer', margin:'auto' }} >
      <img src={avatar_icon.default} alt="User Avatar" height={'30px'} />
    </div>
  );
};

export default Avatar;