import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftFilled'

      short_name='AlignHorizontalLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h80v800H80Zm160-200v-120h400v120H240Zm0-280v-120h640v120H240Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftFilled.displayName = 'OnesyIconMaterialAlignHorizontalLeftFilled';

export default IconMaterialAlignHorizontalLeftFilled;
