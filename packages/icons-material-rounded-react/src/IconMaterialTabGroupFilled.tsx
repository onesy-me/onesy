import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupFilled'

      short_name='TabGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm480-400v-160H520v120q0 17 11.5 28.5T560-640h240Z"/>
    </Icon>
  );
});

IconMaterialTabGroupFilled.displayName = 'OnesyIconMaterialTabGroupFilled';

export default IconMaterialTabGroupFilled;
