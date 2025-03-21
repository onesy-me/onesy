import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLock'

      short_name='SyncLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-480q0 54 21.5 99.5T320-302v-58q0-17 11.5-28.5T360-400q17 0 28.5 11.5T400-360v160q0 17-11.5 28.5T360-160H200q-17 0-28.5-11.5T160-200q0-17 11.5-28.5T200-240h69q-51-44-80-106t-29-134q0-94 49-170t128-116q14-8 29.5-1t20.5 23q5 16-1.5 31T365-690q-56 31-90.5 86.5T240-480Zm520 0q-17 0-28.5-11.5T717-520q-7-39-26.5-73.5T640-658v58q0 17-11.5 28.5T600-560q-17 0-28.5-11.5T560-600v-160q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720h-69q50 45 74.5 95.5T797-520q2 17-9 28.5T760-480ZM640-80q-17 0-28.5-11.5T600-120v-120q0-17 11.5-28.5T640-280v-40q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320v40q17 0 28.5 11.5T840-240v120q0 17-11.5 28.5T800-80H640Zm40-200h80v-40q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320v40Z"/>
    </Icon>
  );
});

IconMaterialSyncLock.displayName = 'OnesyIconMaterialSyncLock';

export default IconMaterialSyncLock;
