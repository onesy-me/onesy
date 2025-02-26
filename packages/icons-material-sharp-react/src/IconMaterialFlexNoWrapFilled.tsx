import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexNoWrapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrapFilled'

      short_name='FlexNoWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-280v-400h240v400H40Zm320 0v-400h240v400H360Zm320 0v-400h240v400H680Zm-560-80h80v-240h-80v240Zm640 0h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrapFilled.displayName = 'OnesyIconMaterialFlexNoWrapFilled';

export default IconMaterialFlexNoWrapFilled;
