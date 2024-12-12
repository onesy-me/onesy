import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceEven = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceEven'

      short_name='AlignJustifySpaceEven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80v-800h80v800h-80ZM80-80v-800h80v800H80Zm480-200v-400h120v400H560Zm-280 0v-400h120v400H280Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceEven.displayName = 'OnesyIconMaterialAlignJustifySpaceEven';

export default IconMaterialAlignJustifySpaceEven;
