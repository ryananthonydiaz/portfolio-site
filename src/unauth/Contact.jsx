import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';

function Contact() {
  const content = (
    <div>Contact Page</div>
  );

  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default Contact;
