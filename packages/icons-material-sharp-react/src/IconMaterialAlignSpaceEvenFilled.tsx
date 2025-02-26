import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceEvenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceEvenFilled'

      short_name='AlignSpaceEven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm200-480v-120h400v120H280Zm0 280v-120h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceEvenFilled.displayName = 'OnesyIconMaterialAlignSpaceEvenFilled';

export default IconMaterialAlignSpaceEvenFilled;
