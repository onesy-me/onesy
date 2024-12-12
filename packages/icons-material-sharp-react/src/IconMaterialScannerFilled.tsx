import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerFilled'

      short_name='Scanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M704-480 140-684l28-76 672 246v354H120v-320h584ZM400-280h320v-80H400v80Zm-160 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialScannerFilled.displayName = 'OnesyIconMaterialScannerFilled';

export default IconMaterialScannerFilled;
