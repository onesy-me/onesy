import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneIphoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneFilled'

      short_name='PhoneIphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm280-100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneFilled.displayName = 'OnesyIconMaterialPhoneIphoneFilled';

export default IconMaterialPhoneIphoneFilled;
