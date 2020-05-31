import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Typography from '@material-ui/core/Typography';

function Landing() {
  let content = <Typography variant="h1">Ryan's Site</Typography>;
  return (
      <UnauthDesktopDrawer>
        {content}
      </UnauthDesktopDrawer>
  );
}

export default Landing;
