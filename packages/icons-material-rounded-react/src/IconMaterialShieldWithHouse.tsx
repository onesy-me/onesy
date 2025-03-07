import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouse'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-579 256-405q19 63 56 114.5t88 86.5v-116q0-17 11.5-28.5T440-360h80q17 0 28.5 11.5T560-320v116q51-35 88-86.5T704-405L480-579ZM240-705v189q0 5 .5 11t.5 11l239-186 239 186q0-5 .5-11t.5-11v-189l-240-90-240 90ZM480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouse.displayName = 'OnesyIconMaterialShieldWithHouse';

export default IconMaterialShieldWithHouse;
