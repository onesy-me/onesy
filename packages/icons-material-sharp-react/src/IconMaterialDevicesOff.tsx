import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOff'

      short_name='DevicesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m354-720-80-80h566v80H354Zm526 520-80-80v-280H640v126l-80-80v-86q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400ZM792-56 688-160h-88q-17 0-28.5-11.5T560-200v-88L240-608v328h240v120H80v-120h80v-408L56-792l56-56 736 736-56 56Zm-72-301Z"/>
    </Icon>
  );
});

IconMaterialDevicesOff.displayName = 'OnesyIconMaterialDevicesOff';

export default IconMaterialDevicesOff;
