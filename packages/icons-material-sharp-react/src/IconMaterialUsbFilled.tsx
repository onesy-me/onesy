import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbFilled'

      short_name='Usb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160q0-21 11-39t29-29v-92H320q-33 0-56.5-23.5T240-400v-92q-18-9-29-27t-11-41q0-33 23.5-56.5T280-640q33 0 56.5 23.5T360-560q0 23-11 40t-29 28v92h120v-320h-80l120-160 120 160h-80v320h120v-80h-40v-160h160v160h-40v80q0 33-23.5 56.5T640-320H520v92q19 10 29.5 28t10.5 40q0 33-23.5 56.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialUsbFilled.displayName = 'OnesyIconMaterialUsbFilled';

export default IconMaterialUsbFilled;
