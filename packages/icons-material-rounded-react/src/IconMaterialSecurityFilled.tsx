import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityFilled'

      short_name='Security'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-164q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Zm0 80q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
    </Icon>
  );
});

IconMaterialSecurityFilled.displayName = 'OnesyIconMaterialSecurityFilled';

export default IconMaterialSecurityFilled;
