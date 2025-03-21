import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalTopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopFilled'

      short_name='AlignVerticalTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-640h120v640H280Zm280-240v-400h120v400H560ZM80-800v-80h800v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopFilled.displayName = 'OnesyIconMaterialAlignVerticalTopFilled';

export default IconMaterialAlignVerticalTopFilled;
