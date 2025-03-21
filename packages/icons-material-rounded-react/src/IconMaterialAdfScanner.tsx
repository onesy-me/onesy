import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdfScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScanner'

      short_name='AdfScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-120q0-50 35-85t85-35h40v-240q0-33 23.5-56.5T320-800h320q33 0 56.5 23.5T720-720v240h40q50 0 85 35t35 85v120q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Zm240-240h320v-240H320v240ZM160-240h640v-120q0-17-11.5-28.5T760-400H200q-17 0-28.5 11.5T160-360v120Zm560-40q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280ZM160-400h640-640Z"/>
    </Icon>
  );
});

IconMaterialAdfScanner.displayName = 'OnesyIconMaterialAdfScanner';

export default IconMaterialAdfScanner;
