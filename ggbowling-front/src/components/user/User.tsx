import React from 'react';

import './user.scss';

interface UserProps{
  username:string;
  password:string;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  birthdate:string;

}


export const User = (props : UserProps) => {
  const {username, password,firstName,lastName,email,phoneNumber,birthdate} = props;

  return (
    <div className="user-container">
      <div className="user-header">
        <h1>{username}'s Profile</h1>
      </div>
      <div className="user-info">
        <div className="user-info-row">
          <span className="user-info-label">Username:</span>
          <span>{username}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Password:</span>
          <span>{password}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Name:</span>
          <span>{firstName} {lastName}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Email:</span>
          <span>{email}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Phone Number:</span>
          <span>{phoneNumber}</span>
        </div>
        <div className="user-info-row">
          <span className="user-info-label">Birthdate:</span>
          <span>{birthdate}</span>
        </div>
      </div>
    </div>
  );
};
