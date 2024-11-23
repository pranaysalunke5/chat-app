import React from 'react';
import './Notification.css';

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="notification-header">
        Notifications
      </div>
      <div className="notification-list">
        <div className="notification-item">
          <p className="notification-message">You have a new message!</p>
          <span className="notification-time">2 mins ago</span>
        </div>
        <div className="notification-item">
          <p className="notification-message">Your friend joined the chat.</p>
          <span className="notification-time">5 mins ago</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
