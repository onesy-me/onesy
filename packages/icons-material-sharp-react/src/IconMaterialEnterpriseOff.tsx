import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnterpriseOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseOff'

      short_name='EnterpriseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m820-28-92-92H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80l80 80H160v440h487L28-820l56-56L876-84l-56 56Zm60-166-80-80v-366H434L320-754v-46q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v446ZM400-720h160v-80H400v80Zm217 263Zm-189 37Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseOff.displayName = 'OnesyIconMaterialEnterpriseOff';

export default IconMaterialEnterpriseOff;
