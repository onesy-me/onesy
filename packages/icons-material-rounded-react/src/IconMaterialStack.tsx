import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stack'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320q-33 0-56.5-23.5T80-400v-400q0-33 23.5-56.5T160-880h400q33 0 56.5 23.5T640-800v40q0 17-11.5 28.5T600-720q-17 0-28.5-11.5T560-760v-40H160v400h40q17 0 28.5 11.5T240-360q0 17-11.5 28.5T200-320h-40ZM400-80q-33 0-56.5-23.5T320-160v-400q0-33 23.5-56.5T400-640h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Zm0-80h400v-400H400v400Zm200-200Z"/>
    </Icon>
  );
});

IconMaterialStack.displayName = 'OnesyIconMaterialStack';

export default IconMaterialStack;
