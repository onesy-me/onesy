import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignItemsStretchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretchFilled'

      short_name='AlignItemsStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-480h120v480H280Zm280 0v-480h120v480H560ZM80-800v-80h800v80H80Zm0 720v-80h800v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretchFilled.displayName = 'OnesyIconMaterialAlignItemsStretchFilled';

export default IconMaterialAlignItemsStretchFilled;
