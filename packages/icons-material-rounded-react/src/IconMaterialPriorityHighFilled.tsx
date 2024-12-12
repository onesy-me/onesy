import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriorityHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighFilled'

      short_name='PriorityHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm0-240q-33 0-56.5-23.5T400-440v-320q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760v320q0 33-23.5 56.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighFilled.displayName = 'OnesyIconMaterialPriorityHighFilled';

export default IconMaterialPriorityHighFilled;
