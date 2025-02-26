import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerFilled'

      short_name='Power'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-160v-80L263-357q-11-11-17-25.5t-6-30.5v-187q0-33 23.5-56.5T320-680h40l-40 40v-160q0-17 11.5-28.5T360-840q17 0 28.5 11.5T400-800v120h160v-120q0-17 11.5-28.5T600-840q17 0 28.5 11.5T640-800v160l-40-40h40q33 0 56.5 23.5T720-600v187q0 16-6 30.5T697-357L580-240v80q0 17-11.5 28.5T540-120H420q-17 0-28.5-11.5T380-160Z"/>
    </Icon>
  );
});

IconMaterialPowerFilled.displayName = 'OnesyIconMaterialPowerFilled';

export default IconMaterialPowerFilled;
