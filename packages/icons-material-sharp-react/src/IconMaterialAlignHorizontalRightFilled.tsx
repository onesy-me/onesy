import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightFilled'

      short_name='AlignHorizontalRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80v-800h80v800h-80ZM320-280v-120h400v120H320ZM80-560v-120h640v120H80Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightFilled.displayName = 'OnesyIconMaterialAlignHorizontalRightFilled';

export default IconMaterialAlignHorizontalRightFilled;
