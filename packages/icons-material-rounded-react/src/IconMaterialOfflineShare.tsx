import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflineShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShare'

      short_name='OfflineShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40q-33 0-56.5-23.5T160-120v-600q0-17 11.5-28.5T200-760q17 0 28.5 11.5T240-720v600h360q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H240Zm160-160q-33 0-56.5-23.5T320-280v-560q0-33 23.5-56.5T400-920h320q33 0 56.5 23.5T800-840v560q0 33-23.5 56.5T720-200H400Zm0-120v40h320v-40H400Zm0-80h320v-320H400v320Zm166-150h-66v40q0 13-8.5 21.5T470-480q-13 0-21.5-8.5T440-510v-60q0-17 11.5-28.5T480-610h86l-7-7q-9-9-9-21t9-21q9-9 21-9t21 9l65 65q6 6 6 14t-6 14l-65 65q-9 9-21 9t-21-9q-9-9-9-21t9-21l7-7ZM400-800h320v-40H400v40Zm0 0v-40 40Zm0 480v40-40Z"/>
    </Icon>
  );
});

IconMaterialOfflineShare.displayName = 'OnesyIconMaterialOfflineShare';

export default IconMaterialOfflineShare;
