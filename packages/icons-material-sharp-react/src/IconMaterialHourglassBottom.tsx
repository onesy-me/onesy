import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassBottom'

      short_name='HourglassBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/>
    </Icon>
  );
});

IconMaterialHourglassBottom.displayName = 'OnesyIconMaterialHourglassBottom';

export default IconMaterialHourglassBottom;
