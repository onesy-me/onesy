import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccount'

      short_name='SwitchAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-520q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM320-330q45-53 108-81.5T560-440q69 0 132 28.5T800-330v-470H320v470Zm0 90q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm400-520q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600ZM428-320h264q-29-20-63-30t-69-10q-35 0-69 10t-63 30Zm132-245Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccount.displayName = 'OnesyIconMaterialSwitchAccount';

export default IconMaterialSwitchAccount;
