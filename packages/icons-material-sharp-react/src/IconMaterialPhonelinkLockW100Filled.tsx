import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockW100Filled'

      short_name='PhonelinkLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-338v-176h41v-40q0-29 19.5-48.5T695-622q29 0 48.5 19.5T763-554v40h39v176H586Zm69-176h80v-40q0-17-11.5-28.5T695-594q-17 0-28.5 11.5T655-554v40ZM252-92v-776h456v184h-28v-62H280v532h400v-62h28v184H252Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockW100Filled.displayName = 'OnesyIconMaterialPhonelinkLockW100Filled';

export default IconMaterialPhonelinkLockW100Filled;
