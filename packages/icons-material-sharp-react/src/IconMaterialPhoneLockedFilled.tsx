import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedFilled'

      short_name='PhoneLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-560v-200h40v-40q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-840q-17 0-28.5 11.5T680-800v40Zm118 640q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedFilled.displayName = 'OnesyIconMaterialPhoneLockedFilled';

export default IconMaterialPhoneLockedFilled;
