import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceBand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceBand'

      short_name='DeviceBand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80v-520h-40v-120h40v-160h320v160h40v120h-40v520H320Zm80-540v460h160v-460H400Zm0-80h160v-100H400v100Zm0 80h160-160Zm0-80h160-160Z"/>
    </Icon>
  );
});

IconMaterialDeviceBand.displayName = 'OnesyIconMaterialDeviceBand';

export default IconMaterialDeviceBand;
