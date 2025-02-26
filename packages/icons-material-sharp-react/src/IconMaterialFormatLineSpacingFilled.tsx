import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatLineSpacingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingFilled'

      short_name='FormatLineSpacing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingFilled.displayName = 'OnesyIconMaterialFormatLineSpacingFilled';

export default IconMaterialFormatLineSpacingFilled;
