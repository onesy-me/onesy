import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiChannel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiChannel'

      short_name='WifiChannel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-16 0-26.5-12t-8.5-28q11-82 29.5-173T200-496q26-72 56.5-108t63.5-36q21 0 41.5 15.5T401-580q19 29 35 70.5t28 92.5q14-106 31-185t39-132q22-53 48.5-79.5T640-840q42 0 76 49t60 147q28 106 42 237t20 246q1 17-10 29t-28 12q-17 0-30.5-11T751-159q-9-33-21-65t-26-60q-18-36-34.5-56T640-360q-18 0-37.5 30T575-283q-13 26-24.5 57T530-161q-5 18-19 29.5T480-120q-17 0-30-12t-15-30q-10-68-23-131.5T383-410q-16-53-32-91t-31-54q-17 18-34 60.5T252-392q-14 51-26.5 110T205-160q-2 17-15 28.5T160-120Zm380-260q23-30 48.5-45t51.5-15q26 0 51.5 15t48.5 45q-9-75-20.5-139T695-633q-13-50-27-82t-28-43q-14 11-28 43t-27 82q-13 50-24.5 114T540-380Z"/>
    </Icon>
  );
});

IconMaterialWifiChannel.displayName = 'OnesyIconMaterialWifiChannel';

export default IconMaterialWifiChannel;
