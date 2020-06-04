import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';

function Work() {
  const content = (
    <div>Work Page</div>
  );
  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default Work;
