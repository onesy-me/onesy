import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkSelectionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkSelectionFilled'

      short_name='InkSelection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-400h400v80H576l264 264-56 56-264-264v264h-80Zm-160 0v-80h80v80h-80ZM120-760v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm640 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialInkSelectionFilled.displayName = 'OnesyIconMaterialInkSelectionFilled';

export default IconMaterialInkSelectionFilled;
