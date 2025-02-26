import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriorityHigh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHigh'

      short_name='PriorityHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z"/>
    </Icon>
  );
});

IconMaterialPriorityHigh.displayName = 'OnesyIconMaterialPriorityHigh';

export default IconMaterialPriorityHigh;
