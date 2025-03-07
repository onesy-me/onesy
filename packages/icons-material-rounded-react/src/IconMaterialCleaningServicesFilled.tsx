import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesFilled'

      short_name='CleaningServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40q-33 0-56.5-23.5T120-120v-200q0-83 58.5-141.5T320-520h40v-320q0-33 23.5-56.5T440-920h80q33 0 56.5 23.5T600-840v320h40q83 0 141.5 58.5T840-320v200q0 33-23.5 56.5T760-40H200Zm0-80h80v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120h80v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120h80v-120q0-17 11.5-28.5T640-280q17 0 28.5 11.5T680-240v120h80v-200q0-50-35-85t-85-35H320q-50 0-85 35t-35 85v200Z"/>
    </Icon>
  );
});

IconMaterialCleaningServicesFilled.displayName = 'OnesyIconMaterialCleaningServicesFilled';

export default IconMaterialCleaningServicesFilled;
