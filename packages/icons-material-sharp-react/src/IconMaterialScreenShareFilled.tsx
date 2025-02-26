import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareFilled'

      short_name='ScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm240-160h80v-80q0-17 11.5-28.5T440-520h80v80l120-120-120-120v80h-80q-50 0-85 35t-35 85v80Z"/>
    </Icon>
  );
});

IconMaterialScreenShareFilled.displayName = 'OnesyIconMaterialScreenShareFilled';

export default IconMaterialScreenShareFilled;
