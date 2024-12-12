import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidW100Filled'

      short_name='PhoneAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-178h136v-28H412v28ZM252-92v-776h456v776H252Zm28-200h400v-454H280v454Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidW100Filled.displayName = 'OnesyIconMaterialPhoneAndroidW100Filled';

export default IconMaterialPhoneAndroidW100Filled;
