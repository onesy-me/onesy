import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4gMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataFilled'

      short_name='4gMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-17 0-28.5-11.5T280-320v-80H160q-17 0-28.5-11.5T120-440v-200q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v160h80v-160q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640v160h40q17 0 28.5 11.5T440-440q0 17-11.5 28.5T400-400h-40v80q0 17-11.5 28.5T320-280Zm240 0q-33 0-56.5-23.5T480-360v-240q0-33 23.5-56.5T560-680h240q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H560v240h200v-80h-60q-17 0-28.5-11.5T660-480q0-17 11.5-28.5T700-520h100q17 0 28.5 11.5T840-480v120q0 33-23.5 56.5T760-280H560Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataFilled.displayName = 'OnesyIconMaterial4gMobiledataFilled';

export default IconMaterial4gMobiledataFilled;
