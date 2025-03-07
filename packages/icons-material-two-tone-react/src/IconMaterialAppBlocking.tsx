import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBlocking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlocking'

      short_name='AppBlocking'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><g><rect fill="none" height="24" width="24"/><g><path d="M18,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C22,9.79,20.21,8,18,8z M15.5,12c0-1.38,1.12-2.5,2.5-2.5 c0.42,0,0.8,0.11,1.15,0.29l-3.36,3.36C15.61,12.8,15.5,12.42,15.5,12z M18,14.5c-0.42,0-0.8-0.11-1.15-0.29l3.36-3.36 c0.18,0.35,0.29,0.73,0.29,1.15C20.5,13.38,19.38,14.5,18,14.5z"/><path d="M17,18H7V6h10v1h2V6V5V3c0-1.1-0.9-2-2-2H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-2v-1v-1h-2V18z M7,3 h10v1H7V3z M17,21H7v-1h10V21z"/></g></g><rect height="1" opacity=".3" width="10" x="7" y="3"/><rect height="1" opacity=".3" width="10" x="7" y="20"/></g>
    </Icon>
  );
});

IconMaterialAppBlocking.displayName = 'OnesyIconMaterialAppBlocking';

export default IconMaterialAppBlocking;
