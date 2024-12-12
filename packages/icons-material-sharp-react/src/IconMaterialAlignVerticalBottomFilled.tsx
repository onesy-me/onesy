import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalBottomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomFilled'

      short_name='AlignVerticalBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h800v80H80Zm200-160v-640h120v640H280Zm280 0v-400h120v400H560Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomFilled.displayName = 'OnesyIconMaterialAlignVerticalBottomFilled';

export default IconMaterialAlignVerticalBottomFilled;
