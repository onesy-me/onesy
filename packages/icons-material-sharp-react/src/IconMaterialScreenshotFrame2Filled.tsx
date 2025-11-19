import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotFrame2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFrame2Filled'

      short_name='ScreenshotFrame2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-560v-120H680v-80h200v200h-80Zm-720 0v-200h200v80H160v120H80Zm600 360v-80h120v-120h80v200H680Zm-600 0v-200h80v120h120v80H80Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrame2Filled.displayName = 'OnesyIconMaterialScreenshotFrame2Filled';

export default IconMaterialScreenshotFrame2Filled;
