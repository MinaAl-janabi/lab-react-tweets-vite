// eslint-disable-next-line no-unused-vars
import React from 'react';

function User(props) {
  return (
    <div className="user">
      <span className="name">{props.USER_NAME}</span>
      <span className="handle">@{props.USER_HANDLE}</span>
    </div>
  );
}

export default User;