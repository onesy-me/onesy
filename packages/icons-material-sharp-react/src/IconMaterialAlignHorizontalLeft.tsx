import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeft'

      short_name='AlignHorizontalLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h80v800H80Zm160-200v-120h400v120H240Zm0-280v-120h640v120H240Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeft.displayName = 'OnesyIconMaterialAlignHorizontalLeft';

export default IconMaterialAlignHorizontalLeft;
