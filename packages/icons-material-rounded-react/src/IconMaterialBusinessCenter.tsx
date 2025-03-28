import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenter'

      short_name='BusinessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v40q0 17-11.5 28.5T560-280H400q-17 0-28.5-11.5T360-320v-40H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-40q0-17 11.5-28.5T400-520h160q17 0 28.5 11.5T600-480v40h200v-200H160v200Zm320 40Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenter.displayName = 'OnesyIconMaterialBusinessCenter';

export default IconMaterialBusinessCenter;
