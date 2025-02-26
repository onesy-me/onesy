import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGppMaybeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeFilled'

      short_name='GppMaybe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0-160q17 0 28.5-11.5T520-520v-120q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v120q0 17 11.5 28.5T480-480Zm0 396q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeFilled.displayName = 'OnesyIconMaterialGppMaybeFilled';

export default IconMaterialGppMaybeFilled;
