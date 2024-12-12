import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenter'

      short_name='FormatAlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm160-160v-80h400v80H280ZM120-440v-80h720v80H120Zm160-160v-80h400v80H280ZM120-760v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenter.displayName = 'OnesyIconMaterialFormatAlignCenter';

export default IconMaterialFormatAlignCenter;
