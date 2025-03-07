import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToDrive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDrive'

      short_name='AddToDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M19,11c0.17,0,0.33,0.01,0.49,0.02L15,3H9l5.68,9.84C15.77,11.71,17.3,11,19,11z"/><polygon points="8.15,4.52 2,15.5 5,21 11.33,10.03"/><path d="M13.2,15.5H9.9L6.73,21h7.81C13.58,19.94,13,18.54,13,17C13,16.48,13.07,15.98,13.2,15.5z"/><polygon points="20,16 20,13 18,13 18,16 15,16 15,18 18,18 18,21 19,21 20,21 20,18 23,18 23,16"/></g></g>
    </Icon>
  );
});

IconMaterialAddToDrive.displayName = 'OnesyIconMaterialAddToDrive';

export default IconMaterialAddToDrive;
