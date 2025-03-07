import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockFilled'

      short_name='MailLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520 212-688q-17-11-34.5-1T160-659q0 9 4 16.5t12 12.5l283 177q10 6 21 6t21-6l283-177q8-5 12-12.5t4-16.5q0-20-17.5-30t-34.5 1L480-520Zm280 360q-17 0-28.5-11.5T720-200v-120q0-17 11.5-28.5T760-360v-40q0-33 23.5-56.5T840-480q33 0 56.5 23.5T920-400v40q17 0 28.5 11.5T960-320v120q0 17-11.5 28.5T920-160H760Zm40-200h80v-40q0-17-11.5-28.5T840-440q-17 0-28.5 11.5T800-400v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v120q0 17-11.5 28.5T840-560q-83 0-141.5 58.5T640-360v160q0 17-11.5 28.5T600-160H160Z"/>
    </Icon>
  );
});

IconMaterialMailLockFilled.displayName = 'OnesyIconMaterialMailLockFilled';

export default IconMaterialMailLockFilled;
