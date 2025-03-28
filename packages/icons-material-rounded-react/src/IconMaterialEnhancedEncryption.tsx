import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnhancedEncryption = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnhancedEncryption'

      short_name='EnhancedEncryption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320v80q0 17 11.5 28.5T480-200q17 0 28.5-11.5T520-240v-80h80q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400h-80v-80q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v80h-80q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320h80ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm120-480h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialEnhancedEncryption.displayName = 'OnesyIconMaterialEnhancedEncryption';

export default IconMaterialEnhancedEncryption;
