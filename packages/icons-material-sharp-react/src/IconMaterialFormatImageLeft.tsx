import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatImageLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageLeft'

      short_name='FormatImageLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h400v400H120Zm80-80h240v-240H200v240Zm-80-400v-80h720v80H120Zm480 160v-80h240v80H600Zm0 160v-80h240v80H600Zm0 160v-80h240v80H600ZM120-120v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatImageLeft.displayName = 'OnesyIconMaterialFormatImageLeft';

export default IconMaterialFormatImageLeft;
