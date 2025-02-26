import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignEndFilled'

      short_name='AlignEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h800v80H80Zm200-440v-120h400v120H280Zm0 240v-120h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialAlignEndFilled.displayName = 'OnesyIconMaterialAlignEndFilled';

export default IconMaterialAlignEndFilled;
