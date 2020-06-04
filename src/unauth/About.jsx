import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';

function About() {
  let content = (
    <div>About Page</div>
  );
  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default About;
