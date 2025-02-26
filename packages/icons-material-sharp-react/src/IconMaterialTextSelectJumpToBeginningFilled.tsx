import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectJumpToBeginningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectJumpToBeginningFilled'

      short_name='TextSelectJumpToBeginning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM600-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM440-760v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm0 640v-80h80v80h-80Zm-160 0v-720h80v720h-80Zm440-200L400-480l160-160 56 56-63 64h287v80H553l63 64-56 56ZM440-120v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectJumpToBeginningFilled.displayName = 'OnesyIconMaterialTextSelectJumpToBeginningFilled';

export default IconMaterialTextSelectJumpToBeginningFilled;
