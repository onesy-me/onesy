import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidFilled'

      short_name='PhoneAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-160h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-280h400v-400H280v400Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidFilled.displayName = 'OnesyIconMaterialPhoneAndroidFilled';

export default IconMaterialPhoneAndroidFilled;
