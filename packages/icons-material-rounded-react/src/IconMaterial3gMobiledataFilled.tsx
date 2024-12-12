import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3gMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataFilled'

      short_name='3gMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h160v-80H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h160v-80H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h160q33 0 56.5 23.5T400-600v60q0 25-17.5 42.5T340-480q25 0 42.5 17.5T400-420v60q0 33-23.5 56.5T320-280H160Zm400 0q-33 0-56.5-23.5T480-360v-240q0-33 23.5-56.5T560-680h240q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H560v240h200v-80h-60q-17 0-28.5-11.5T660-480q0-17 11.5-28.5T700-520h100q17 0 28.5 11.5T840-480v120q0 33-23.5 56.5T760-280H560Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataFilled.displayName = 'OnesyIconMaterial3gMobiledataFilled';

export default IconMaterial3gMobiledataFilled;
