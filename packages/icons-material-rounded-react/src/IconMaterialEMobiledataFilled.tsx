import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataFilled'

      short_name='EMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H400v80h200q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H400v80h200q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataFilled.displayName = 'OnesyIconMaterialEMobiledataFilled';

export default IconMaterialEMobiledataFilled;
