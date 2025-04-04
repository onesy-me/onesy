import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4gPlusMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gPlusMobiledata'

      short_name='4gPlusMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-440h-40q-17 0-28.5-11.5T720-480q0-17 11.5-28.5T760-520h40v-40q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560v40h40q17 0 28.5 11.5T960-480q0 17-11.5 28.5T920-440h-40v40q0 17-11.5 28.5T840-360q-17 0-28.5-11.5T800-400v-40ZM440-280q-33 0-56.5-23.5T360-360v-240q0-33 23.5-56.5T440-680h200q17 0 28.5 11.5T680-640q0 17-11.5 28.5T640-600H440v240h160v-80h-40q-17 0-28.5-11.5T520-480q0-17 11.5-28.5T560-520h80q17 0 28.5 11.5T680-480v120q0 33-23.5 56.5T600-280H440ZM120-640v160h80v-160q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v160q17 0 28.5 11.5T320-440q0 17-11.5 28.5T280-400v80q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320v-80H80q-17 0-28.5-11.5T40-440v-200q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640Z"/>
    </Icon>
  );
});

IconMaterial4gPlusMobiledata.displayName = 'OnesyIconMaterial4gPlusMobiledata';

export default IconMaterial4gPlusMobiledata;
