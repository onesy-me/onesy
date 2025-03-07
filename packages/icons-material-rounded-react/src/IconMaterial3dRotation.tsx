import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3dRotation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotation'

      short_name='3dRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-360H520q-8 0-14-6t-6-14v-200q0-8 6-14t14-6h100q17 0 28.5 11.5T660-560v160q0 17-11.5 28.5T620-360Zm-200 0h-90q-13 0-21.5-8.5T300-390q0-13 8.5-21.5T330-420h70v-40h-40q-8 0-14-6t-6-14q0-8 6-14t14-6h40v-40h-70q-13 0-21.5-8.5T300-570q0-13 8.5-21.5T330-600h90q17 0 28.5 11.5T460-560v160q0 17-11.5 28.5T420-360Zm140-60h40v-120h-40v120Zm280-20q-17 0-28.5-11.5T800-480q0-115-72.5-203T542-794l30 30q11 11 11 28t-11 28q-11 11-28 11t-28-11L387-837q-8-8-5-20t15-15q20-5 41-6.5t42-1.5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 17-11.5 28.5T840-440ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480q0 115 72.5 203T418-166l-30-30q-11-11-11-28t11-28q11-11 28-11t28 11l129 129q8 8 5 20t-15 15q-20 5-41 6.5T480-80Z"/>
    </Icon>
  );
});

IconMaterial3dRotation.displayName = 'OnesyIconMaterial3dRotation';

export default IconMaterial3dRotation;
