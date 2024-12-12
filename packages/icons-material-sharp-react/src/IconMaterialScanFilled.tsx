import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanFilled'

      short_name='Scan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-600h200L520-800v200ZM160-80v-200h640v200H160ZM40-360v-80h880v80H40Zm120-160v-360h400l240 240v120H160Z"/>
    </Icon>
  );
});

IconMaterialScanFilled.displayName = 'OnesyIconMaterialScanFilled';

export default IconMaterialScanFilled;
