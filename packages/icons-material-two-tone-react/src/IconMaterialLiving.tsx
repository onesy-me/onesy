import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiving = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Living'

      short_name='Living'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,20h16V4H4V20z M5,12.5c0-0.92,0.51-1.72,1.25-2.15V9c0-1.66,1.34-3,3-3h5.5c1.66,0,3,1.34,3,3v1.35 C18.49,10.78,19,11.58,19,12.5V16c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V12.5z" opacity=".3"/><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z M7,18h10 c1.1,0,2-0.9,2-2v-3.5c0-0.92-0.51-1.72-1.25-2.15V9c0-1.66-1.34-3-3-3h-5.5c-1.66,0-3,1.34-3,3v1.35C5.51,10.78,5,11.58,5,12.5 V16C5,17.1,5.9,18,7,18z M7.75,9c0-0.83,0.67-1.5,1.5-1.5h5.5c0.83,0,1.5,0.67,1.5,1.5v1.03C14.99,10.15,14,11.2,14,12.5V13h-4 v-0.5c0-1.3-0.99-2.35-2.25-2.47V9z M6.5,12.5c0-0.55,0.45-1,1-1s1,0.45,1,1v2h7v-2c0-0.55,0.45-1,1-1s1,0.45,1,1V16 c0,0.28-0.22,0.5-0.5,0.5H7c-0.28,0-0.5-0.22-0.5-0.5V12.5z"/></g></g>
    </Icon>
  );
});

IconMaterialLiving.displayName = 'OnesyIconMaterialLiving';

export default IconMaterialLiving;
