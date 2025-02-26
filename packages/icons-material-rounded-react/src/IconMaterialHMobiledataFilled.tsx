import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataFilled'

      short_name='HMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440v120q0 17-11.5 28.5T320-280q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640v120h240v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280q-17 0-28.5-11.5T600-320v-120H360Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataFilled.displayName = 'OnesyIconMaterialHMobiledataFilled';

export default IconMaterialHMobiledataFilled;
