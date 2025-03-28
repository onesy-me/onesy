import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabledFilled'

      short_name='SyncDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-478q0 47 18.5 90t51.5 76l10 10v-58q0-17 11.5-28.5T360-400q17 0 28.5 11.5T400-360v160q0 17-11.5 28.5T360-160H200q-17 0-28.5-11.5T160-200q0-17 11.5-28.5T200-240h70l-16-14q-45-45-69.5-103T160-478q0-44 11-85.5t34-79.5L84-764q-12-12-11.5-28.5T85-821q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T764-85L643-205q-11 7-22 12l-22 10q-15 6-29.5-1.5T550-209q-5-17 4-30.5t25-21.5q11-5 20-11t19-12l-26 28-328-328q-11 25-17.5 51.5T240-478Zm517 159-60-60q11-24 17-50t6-53q0-47-18.5-90T650-648l-10-10v58q0 17-11.5 28.5T600-560q-17 0-28.5-11.5T560-600v-160q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720h-70l16 14q45 45 69.5 103T800-482q0 43-11 84t-32 79ZM379-697l-60-60q11-6 21-10.5t21-9.5q16-6 30 1.5t19 24.5q4 16-4.5 30T382-699q-1 1-1.5 1t-1.5 1Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabledFilled.displayName = 'OnesyIconMaterialSyncDisabledFilled';

export default IconMaterialSyncDisabledFilled;
