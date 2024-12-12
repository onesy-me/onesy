import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowSelectorToolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolFilled'

      short_name='ArrowSelectorTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-80 406-392 240-160v-720l560 440H516l144 309-109 51Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolFilled.displayName = 'OnesyIconMaterialArrowSelectorToolFilled';

export default IconMaterialArrowSelectorToolFilled;
