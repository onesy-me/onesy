import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDeleteFilled'

      short_name='ScanDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-600h200L520-800v200Zm116 500-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83ZM160-80v-800h400l240 240v174q-19-7-39-10.5t-41-3.5q-100 0-170 69.5T480-241q0 45 16 86.5T542-80H160Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteFilled.displayName = 'OnesyIconMaterialScanDeleteFilled';

export default IconMaterialScanDeleteFilled;
