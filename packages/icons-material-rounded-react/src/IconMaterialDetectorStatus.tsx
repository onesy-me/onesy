import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorStatus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatus'

      short_name='DetectorStatus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-233 141-141q12-12 28.5-12.5T636-375q12 12 12 28.5T636-318L466-148q-12 12-28 12t-28-12l-86-86q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l57 57ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-40q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM200-760v40-40Z"/>
    </Icon>
  );
});

IconMaterialDetectorStatus.displayName = 'OnesyIconMaterialDetectorStatus';

export default IconMaterialDetectorStatus;
