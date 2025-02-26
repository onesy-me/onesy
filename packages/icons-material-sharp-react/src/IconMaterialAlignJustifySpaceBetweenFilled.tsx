import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceBetweenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetweenFilled'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetweenFilled.displayName = 'OnesyIconMaterialAlignJustifySpaceBetweenFilled';

export default IconMaterialAlignJustifySpaceBetweenFilled;
