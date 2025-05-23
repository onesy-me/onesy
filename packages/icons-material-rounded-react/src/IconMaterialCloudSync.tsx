import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudSync = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSync'

      short_name='CloudSync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-480q0 54 21.5 99.5T320-302v-58q0-17 11.5-28.5T360-400q17 0 28.5 11.5T400-360v160q0 17-11.5 28.5T360-160H200q-17 0-28.5-11.5T160-200q0-17 11.5-28.5T200-240h69q-51-44-80-106t-29-134q0-95 49.5-171T338-767q14-8 29-.5t20 23.5q5 16-1.5 31T365-690q-56 31-90.5 86.5T240-480Zm360 320q-50 0-85-35t-35-85q0-48 33-82.5t81-36.5q17-36 50.5-58.5T720-480q53 0 91.5 34.5T858-360q42 0 72 29t30 70q0 42-29 71.5T860-160H600Zm40-498v58q0 17-11.5 28.5T600-560q-17 0-28.5-11.5T560-600v-160q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720h-69q33 29 57.5 66.5T786-572q5 16-4 29t-26 16q-17 3-30.5-6.5T706-559q-10-29-27-54t-39-45Zm-40 418h260q8 0 14-6t6-14q0-8-6-14t-14-6h-70v-50q0-29-20.5-49.5T720-400q-29 0-49.5 20.5T650-330v10h-50q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240Zm120-80Z"/>
    </Icon>
  );
});

IconMaterialCloudSync.displayName = 'OnesyIconMaterialCloudSync';

export default IconMaterialCloudSync;
