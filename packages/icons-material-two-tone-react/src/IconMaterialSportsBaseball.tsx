import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBaseball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseball'

      short_name='SportsBaseball'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5.61,7.22C4.6,8.55,4,10.2,4,12s0.6,3.45,1.61,4.78C7.06,15.69,8,13.95,8,12S7.06,8.31,5.61,7.22z" opacity=".3"/><path d="M14,12c0-2.52,1.17-4.77,3-6.24C15.63,4.66,13.89,4,12,4S8.37,4.66,7,5.76c1.83,1.47,3,3.71,3,6.24 s-1.17,4.77-3,6.24c1.37,1.1,3.11,1.76,5,1.76s3.63-0.66,5-1.76C15.17,16.77,14,14.52,14,12z" opacity=".3"/><path d="M18.39,7.22C16.94,8.31,16,10.05,16,12s0.94,3.69,2.39,4.78C19.4,15.45,20,13.8,20,12S19.4,8.55,18.39,7.22 z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M5.61,16.78C4.6,15.45,4,13.8,4,12 s0.6-3.45,1.61-4.78C7.06,8.31,8,10.05,8,12S7.06,15.69,5.61,16.78z M12,20c-1.89,0-3.63-0.66-5-1.76c1.83-1.47,3-3.71,3-6.24 S8.83,7.23,7,5.76C8.37,4.66,10.11,4,12,4s3.63,0.66,5,1.76c-1.83,1.47-3,3.71-3,6.24s1.17,4.77,3,6.24 C15.63,19.34,13.89,20,12,20z M18.39,16.78C16.94,15.69,16,13.95,16,12s0.94-3.69,2.39-4.78C19.4,8.55,20,10.2,20,12 S19.4,15.45,18.39,16.78z"/></g></g>
    </Icon>
  );
});

IconMaterialSportsBaseball.displayName = 'OnesyIconMaterialSportsBaseball';

export default IconMaterialSportsBaseball;
